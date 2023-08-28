import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import { globa_style, UI_style } from '../../../../assets/styles/style';


export default function FormItem({addTask}) {
    const [text, setValue] = useState('');
    const onChange = (text) => {
        setValue(text);
    };
    const handleAddTask = () => {
        addTask(text);
        setValue('');
    };
    

    return (
        <View style={styles.container}>
            <TextInput 
                style={[styles.marginBottom5px, styles.textInput, styles.text]} 
                onChangeText={onChange} 
                value={text}
                placeholder='what are u want to do today?'
                placeholderTextColor={'#f5deb3a3'}
            />
            <TouchableOpacity 
                onPress={handleAddTask}
            >
                <LinearGradient
                    colors={['#FF6B6B', '#E54099', 'rgba(125, 70, 123, 0.97)']}
                    start={{x:0,y:0.36}}
                    end={{x:0.9,y:1}}
                    style={[UI_style.button, {width:'100%', height:40, marginTop:10,}]}
                >
                    <Text style={globa_style.login_text_2}>
                        +Add task
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
   
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:16,
        color: 'white',    
    },
    container: {
        marginVertical:15,
        marginHorizontal: 15,        
    },

    marginBottom5px: {
        marginBottom:5,
    },
    textInput: {
        borderBottomWidth:1,
        borderColor: '#87CEEB',
        padding:12,
        
    },
});
