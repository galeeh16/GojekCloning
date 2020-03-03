import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Kupon = () => {
    return(
        <View style={style.kupon}>
            <Text style={style.text}>You have 36 vouchers</Text>
            <View style={style.right}>
                <Text style={style.textRight}>See All</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    kupon: {
        backgroundColor: '#ec6363',
        margin: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    right: {
        backgroundColor: '#c13a3a' ,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 4
    },
    textRight: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
        
    }
})

export default Kupon 