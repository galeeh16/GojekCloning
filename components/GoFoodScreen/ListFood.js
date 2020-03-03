import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListFood = ({image, title, category, distance}) => {
    return(
        <View style={style.container}>
            <View style={{width: 90, height: 90}}>
                <Image source={image} style={style.image} />
            </View>
            <View style={style.right}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.category}>{category}</Text>
                <Text style={style.distance}>{distance}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 8
    },
    right: {
        paddingLeft: 18
    },
    title: {
        color: '#000',
        fontSize: 15
    },
    category: {
        color: '#777',
        fontSize: 14,
        marginTop: 12
    },
    distance: {
        color: '#000',
        fontSize: 14,
        marginTop: 12,
        fontWeight: '500'
    }
})

export default ListFood