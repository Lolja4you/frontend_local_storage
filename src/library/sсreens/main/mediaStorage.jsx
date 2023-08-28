import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

import { AntDesign } from 'react-native-vector-icons';

import { getToken } from "../../../networking/api/asyncStorage";
import Headers from "../../components/organisms/layouts/headers";
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, Value } from "react-native-reanimated";


const renderItem = (item, onAction) => {
  return (
    <TouchableOpacity onPress={() => onAction(item.media_path) }>
      <Image
        source={{ uri: item.media_path }}
        style={{
          width: 98,
          height: 98,
          borderWidth: 1,
          borderColor: "rgba(128, 128, 128, 0.50)",
          borderRadius: 1,
        }}
      />
    </TouchableOpacity>
  );
};

const MediaStorage = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  
  const [selectedImage, setSelectedImage] = useState(null)
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);

  const log = (title) => {
    'worklet';
    console.log(`${title}`);
  };

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
      log('onBegin')
    })
    .onChange((event) => {
      offset.value = event.translationY;
      log('onChange')
    })
    .onEnd(() => {
      offset.value = withSpring(0);
      if (Math.abs(offset.value) < 100) {
        offset.value = withSpring(0);
      } else {
        handleCloseModal()
        log('onEnd')
      }
    });

    
    const handleAction = (image) => {
      'worklet';
      setIsVisibleModal(true);
      setSelectedImage(image);
    };
    
    const handleCloseModal = () => {
      'worklet';
      const handleCloseModal = () => {
        'worklet';
        if (isVisibleModal) {
          setIsVisibleModal(false);
          setSelectedImage(null);
        }
      };
    };
    
    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: offset.value }],
      };
    });

  const getDataFromApi = async () => {
    try {
      const response = await fetch("http://192.168.1.225:8000/api/v1.0/Media", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      } else {
        const data = await response.json();
        setData(data);
        console.log(data.value)
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <View style={styles.container}>
      <Headers />
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item, handleAction)}
        numColumns={4}
        contentContainerStyle={{ alignItems: "flex-start" }}
      />
      
      <Modal 
        visible={isVisibleModal}
        animationType="fade" 
        transparent
        statusBarTranslucent
        onRequestClose={handleCloseModal}
      >
        <GestureHandlerRootView style={{flex:1}}>
          <GestureDetector gesture={panGesture}>
            <Animated.View style={[{flex:1, backgroundColor:"black"}, animatedStyles]}>
              <Image
                source={{ uri: selectedImage }}
                style={[styles.modalImage]}
                resizeMode="contain"
              />
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      </Modal>
    </View>
  );
};

export default MediaStorage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0, 0, 15)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  blurStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
