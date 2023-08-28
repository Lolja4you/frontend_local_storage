import React, { useEffect, useState } from "react"
import {TouchableOpacity, Text} from 'react-native';

import CheckboxAuth from "../../../atoms/authorization/login/check_box";

import { globa_style, UI_style } from '../../../../../../assets/styles/style'

const RememberMeCheckBox = () => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked((prevChecked) => !prevChecked);
    }

    return(
        <TouchableOpacity style={{
            alignItems:'center', 
            justifyContent:'flex-start', 
            flexDirection:'row', 
            width:200}} 
        >
            <CheckboxAuth isChecked={isChecked} onPress={handleCheckboxChange} />
            <Text style={UI_style.Link_text_1}>{" "}Remember me</Text>
        </TouchableOpacity>
    )
}

export default RememberMeCheckBox