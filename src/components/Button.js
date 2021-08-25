import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => {
    
    return( 
        <TouchableOpacity
        style={{
            backgroundColor: '#34bb8c',
            padding: 16,
            margin: 10,
            borderRadius: 10,
        }}
        onPress={() => props.onPress()}
        
    >
        <Text style={{ color: 'white', fontSize: 24}}>{props.title}</Text>
    </TouchableOpacity>
    )
}

export default Button;