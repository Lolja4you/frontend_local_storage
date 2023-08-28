import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const Popup = ({ message, textColor, onClose, header, icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const handlePress = () => {
    onClose();
  };

return (
  <View style={[styles.container, {borderLeftColor:textColor,}]}>
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.modalContainer}> 
        <View style={{paddingRight:10}}>
          <MaterialIcons name={icon} size={25} color={textColor}  />
        </View>
        <View>
          <Text style={{color: textColor, fontFamily:'Lato-B', fontSize:16}}>{header}</Text>
          <Text style={[styles.text, { color:'white' }]}>{message}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf:'center',
    height:60,
    width:'65%',
    bottom:20,
    borderRadius: 10,
    borderWidth:1,
    borderRightColor:'rgba(245, 222, 179, 0.5)',
    borderBottomColor:'rgba(245, 222, 179, 0.5)',
    borderTopColor:'rgba(245, 222, 179, 0.5)',
    backgroundColor: "rgba(255,255,255, 0.61)",
    borderLeftWidth:5,    
  },

  modalContainer: {
    width: '100%',
    padding: 10,
    flexDirection:"row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderLeftWidth:5,
    //borderLeftColor:"red",
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Lato-reg',
    textShadowColor:'rgba(0,0,0,0.3)',
    textShadowOffset:{width:0, height:1},
    textShadowRadius:1,
    alignContent:'center',
    justifyContent:'center'
  },
});

export default Popup;