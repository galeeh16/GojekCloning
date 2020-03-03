import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

const Feature = ({icon, title, onPress}) => {
    return(
        <TouchableOpacity style={{width: '25%', alignItems: 'center'}} onPress={onPress}>
            <View style={{ width: 58, height: 58, borderRadius: 18, borderWidth: 1, borderColor: '#e8e8e8', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={icon} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 6}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Feature