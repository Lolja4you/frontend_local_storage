import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, BackHandler,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {hideAsync, preventAutoHideAsync} from 'expo-splash-screen';
import { useFonts } from 'expo-font'

import LoginScreen from './src/library/sсreens/authScreens/login_screen'
import SideBar from './src/library/components/organisms/layouts/sidebar/sideBar';


const App = () =>{
  let[fontsLoaded] = useFonts({
    'Lato-B' : require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-reg': require('./assets/fonts/Lato-Regular.ttf'),
    'Montserrat-alt-B': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
  })

  useEffect(() => {
    async function prepare() {
      await preventAutoHideAsync();
    }
    prepare();
  }, []);
  
  if (!fontsLoaded) {
    return null;
  }
  hideAsync();
  


  
  const Stack = createNativeStackNavigator();

  return(
    
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}><StatusBar barStyle={'auto'}/>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='debilism-x' component={SideBar}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
 
  ) 
}

export default App