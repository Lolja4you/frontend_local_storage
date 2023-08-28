import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Modal, StatusBar, Text, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import { globa_style } from '../../../../assets/styles/style';

import LogInForm from '../../components/molecules/login_form';
import Headers from '../../components/organisms/layouts/headers';
import Footer from '../../components/organisms/layouts/footer';

import Popup from '../../components/organisms/popup';

import DissmissKeyboardUtil from '../../../utils/keyboard_utils/DismissKeyboard';

const LoginScreen = ({navigation}) =>{

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTextColor, setPopupTextColor] = useState('#FFFFFF');
  const [popupHeader, setPopupHeader] = useState('Error');
  const [popupIcon, setPopupIcon] = useState('error-outline');


  const handleAction = () => {
    setShowPopup(true);
    setPopupMessage('Wrong username or password');
    setPopupTextColor('red'),
    setPopupHeader('Error')
  }
  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  }; 
  return(
    <DissmissKeyboardUtil>
      <BlurView
        tint='dark' 
        intensity={85}
        style={[globa_style.main_container]}
      >
        <LinearGradient
          colors={['#000027', 'rgba(125, 70, 123, 0.97)']}
          start={{x:0,y:0.36}}
          end={{x:0.75,y:1}}
          style={globa_style.blur_container}
        >

          <View style={{alignItems:"center"}}>
            <LogInForm
              navigation={navigation} 
              onAction={handleAction}
            />
          </View>

          {showPopup && (<Popup
                        message={popupMessage}
                        onClose={closePopup} 
                        textColor={popupTextColor}
                        header={popupHeader}
                        icon={popupIcon}
                      />

          )}


        </LinearGradient>
      </BlurView>
    </DissmissKeyboardUtil>
 
  ) 
}

export default LoginScreen