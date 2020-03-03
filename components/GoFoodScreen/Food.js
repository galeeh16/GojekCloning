import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Food = ({img, title, price}) => {
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={img} style={style.img} />
            </View>
            <View style={style.body}>
                <Text style={{flexShrink: 1}}>{title}</Text>
                <Text style={{marginTop: 5, fontWeight: 'bold'}}>{price}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginRight: 12, 
        borderRadius: 8, 
        // overflow: 'hidden'
    },
    header: {
        width: 130, 
        height: 130, 
        borderRadius: 8
    },
    img: {
        width: undefined, 
        height: undefined, 
        resizeMode: 'cover', 
        flex: 1, 
        borderTopLeftRadius: 8, 
        borderTopRightRadius: 8
    },
    body: {
        borderColor: '#e4e4e4', 
        borderLeftWidth: 1, 
        borderRightWidth: 1, 
        borderBottomWidth: 1, 
        borderRadius: 6,
        padding: 5
    },
    title: {
        
    }
})

export default Food 