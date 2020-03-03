import React from 'react'
import {View, Image, Text} from 'react-native'

const BottomNav = ({img, title, active}) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={img}></Image>
            <Text style={{ fontSize: 11, marginTop: 4, color: active ? '#43AB4A' : '#1c1c1c'}}>{title}</Text>
        </View>
    )
}

export default BottomNav