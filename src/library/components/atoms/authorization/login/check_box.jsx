import React, { useEffect, useState } from "react"
import Checkbox from 'expo-checkbox';


const CheckboxAuth = ({isChecked, onPress}) => {
    return (
        <Checkbox style={{
                borderRadius:360, 
                justifyContent:'flex-start', 
                backgroundColor:'white', 
                borderWidth:1, 
                borderColor:'silver',
            }}
            isChecked={isChecked}
            onPress={onPress}
        />
    )
}
export default CheckboxAuth