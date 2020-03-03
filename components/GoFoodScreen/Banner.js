import React from 'react'
import { View, Image } from 'react-native'

const Banner = ({img}) => {
    return(
        <View style={{marginRight: 16}}>
            <View style={{width: 290, height: 150, borderRadius: 8, overflow: 'hidden'}}>
                <Image source={img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1}} />
            </View>
        </View>
    )
}

export default Banner 