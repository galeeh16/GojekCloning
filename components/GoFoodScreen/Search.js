import React from 'react'
import { View, TextInput, Image, StyleSheet } from 'react-native'

const InputSearch = () => {
    return(
        <View style={style.wrapper}>
            <TextInput placeholder="What would you like to eat?" style={style.input} />
            <Image source={require('../../assets/icon/search.png')} style={style.img} />
        </View>
    )
}


const style = StyleSheet.create({
    wraper: {
        position: 'absolute',
        paddingBottom: 5
    },  
    input: {
        backgroundColor: '#fff', 
        marginHorizontal: 16, 
        borderRadius: 4, 
        borderWidth: 1, 
        borderColor: '#e4e4e4', 
        paddingLeft: 50, 
        paddingRight: 16, 
        position: 'relative',
        paddingVertical: 7 
     },
     img: {
         position: 'absolute',
         top: 10,
         left: 25
     }
 })

export default InputSearch