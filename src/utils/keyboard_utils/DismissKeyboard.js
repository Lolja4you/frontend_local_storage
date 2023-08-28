import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'


const DissmissKeyboardUtil = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default DissmissKeyboardUtil


