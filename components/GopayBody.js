import React from 'react'
import {View, Image, Text} from 'react-native'

const GopayBody = (props) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={props.icon} />
            <Text style={{color: 'white', fontSize: 13}}>Pay</Text>
        </View>
    )
}

export default GopayBody