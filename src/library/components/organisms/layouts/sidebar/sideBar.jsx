import React from 'react'
import {Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';

import ToDoMainPage from '../../../../sсreens/toDoList/main_page'
import MediaStorage from '../../../../sсreens/main/mediaStorage';
import CustomSideBar from './customSideBar';


const Drawer = createDrawerNavigator();

const SideBar = () => {
  return (
    <View style={{flex:1}}>
      <Drawer.Navigator
        drawerType='slide'
        drawerStyle={{
          flex:1,width:'65%', paddingRight:20,
        }}
        sceneContainerStyle={{
          backgroundColor:'transparent'
        }}
        initialRoutName='Tasks'
        screenOptions={{
          headerShown:false,
          drawerActiveBackgroundColor:'rgba(255, 192, 203, 0.15)',
          drawerActiveTintColor:'rgba(255, 192, 203, 1)',
          drawerInactiveTintColor:'wheat',
          drawerStyle:{
            backgroundColor:'rgb(10,8,15)'
          },
          
        }}
      >
        <Drawer.Screen name='Tasks' component={ToDoMainPage} />
        <Drawer.Screen name='Media' component={MediaStorage} />
      </Drawer.Navigator>
    </View>
  )
}

export default SideBar

