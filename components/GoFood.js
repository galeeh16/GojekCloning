import React from 'react'
import {View, Image, Text} from 'react-native'

const GoFood = ({title, img}) => {
    return(
        <View style={{marginTop: 16, marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} />
            </View>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1c1c1c', textAlign: 'center', marginTop: 10}}>{title}</Text>
        </View>
    )
}

export default GoFood