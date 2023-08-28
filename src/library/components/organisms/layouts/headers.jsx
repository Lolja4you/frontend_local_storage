import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { globa_style } from '../../../../../assets/styles/style';


export default function Headers() {

  return (
    <View style={globa_style.header_container}>
        <Text style={{color:'wheat', fontFamily:'Lato-B', fontSize:18}}>Media</Text>
    </View>
  );
}

