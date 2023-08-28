import React, { useState } from 'react';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { saveToken } from '../../../networking/api/asyncStorage';


import { globa_style, UI_style } from '../../../../assets/styles/style';

import RememberMeCheckBox from './authorization/login/RememderCheck';


export default function LogInForm({navigation, onAction}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
   
    const handeleClick = () => {
        onAction()
    }

    const handleLogin = async () => {
        // Отправляем данные на backend и получаем токен
        try {
            const response = await fetch('http://192.168.1.225:8000/api/v1.0/token/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
            });
            const data = await response.json();
            if (data.access){
                setToken(data.access);
                saveToken(data.access);
                handleRedirect({navigation});
            } else {
                handeleClick()
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRedirect = () => (navigation.navigate('debilism-x'));

    return (
        <View style={[globa_style.login_container, {paddingTop:15}]}>

            <View style={globa_style.login_container_2}>
                <Text style={globa_style.login_text_1}>Log in</Text>
                <Text style={globa_style.login_text_2}>to continue</Text>
            </View>

            <View style={globa_style.login_container_2}>
                <TextInput 
                    style={[UI_style.Input,{marginBottom:15}]}
                    placeholder='Username@'
                    placeholderTextColor={'rgba(116, 107, 92, 1)'}
                    value={username}
                    onChangeText={setUsername}

                />                
                <TextInput 
                    style={UI_style.Input}
                    placeholder='Password'
                    placeholderTextColor={'rgba(116, 107, 92, 1)'}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={globa_style.login_container_2}>
                <View >
                    <RememberMeCheckBox />
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', flexDirection:'row', width:200}}>
                    <Text style={UI_style.Link_text_1}>
                        Forgot password?
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={[globa_style.login_container_2]} onPress={handleLogin}>
                
                <LinearGradient
                    colors={['#FF6B6B', '#E54099', 'rgba(125, 70, 123, 0.97)']}
                    start={{x:0,y:0.36}}
                    end={{x:0.9,y:1}}
                    style={[UI_style.button,]}
                >
                    <Text style={globa_style.login_text_2}>
                        Log In
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            
            <View style={[globa_style.login_container_2, {borderTopWidth:1, borderTopColor:'rgba(245, 222, 179, .37)'}]}>
                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', width:200, padding:10}}>
                    <Text style={globa_style.login_text_3}>
                        Don’t have an account?
                    </Text>
                    <Text style={UI_style.Link_text_1}>
                        {" "} Sign Up!
                    </Text>
                </View>
            </View>
        </View>
    )
}

