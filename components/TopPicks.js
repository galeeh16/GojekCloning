import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TopPick = ({title, active}) => {
    const style = StyleSheet.create({
        box: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#e4e4e4',
            borderRadius: 25,
            paddingHorizontal: 10,
            paddingVertical: 2,
            marginRight: 10,
            backgroundColor: active ? '#4da75c' : 'white'
        },
        text: {
            fontWeight: active ? 'bold' : 'normal',
            color: active ? 'white' : '#545454'
        }
    })

    return(
        <View style={style.box}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

export default TopPick