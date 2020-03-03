import React from 'react'
import {View, Image} from 'react-native'

const GoFoodBanner = (props) => {
    return(
        <View style={{padding: 16}}>
            <View>
                <Image source={require('../assets/dummy/food-banner.jpg')} style={{height: 200, width: '100%'}} />
                <View style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', top: 0, left: 0, opacity: 0.27}}></View>
                <View style={{ width: 70, height: 20, position: 'absolute', top: 10, left: 10 }}>
                    <Image source={require('../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
            </View>
        </View>
    )
}

export default GoFoodBanner