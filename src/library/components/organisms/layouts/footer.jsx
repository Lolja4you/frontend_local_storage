import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { BlurView } from 'expo-blur';


export default function Footer() {

  return (
    <View>
      <BlurView
        tint='light' 
        intensity={25}
        style={{
          borderTopWidth:0.65, 
          borderColor:'wheat', 
          padding:20, 
          flexDirection:'row',
          justifyContent:"center",
          width:'100%',
        }}
      >
        <Text style={{color:'white'}}>made in China by Meloch</Text>
      </BlurView>
    </View>
  );
}
