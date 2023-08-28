import React, { useState } from 'react';
import {TouchableOpacity, Text} from 'react-native';




const ButtonLinkUi = (props) =>{
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };
    
    const handlePressOut = () => {
        setIsPressed(false);
    };

    return(

        <TouchableOpacity 
            style={[
                isPressed ? styles.buttonPressed : styles.buttonNotPressed,
            ]}
            
            onPress={props.handle}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={props.style_text}>{props_nam}</Text>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    buttonPressed: {
        backgroundColor: 'wheat',
    },

});