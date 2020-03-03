import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Iklan = () => {
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require('../../assets/dummy/go-food-kfc.jpg')} style={style.image} />
            </View>
            <View style={style.body}>
                <Text style={style.textHeader}>Order from super partner!</Text>
                <Text style={style.textBody}>For faster delivery, resto will immediately prepare orders. Can't change or cancel it.</Text>
                <View style={style.buttonContainer}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>Try now</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderRadius: 6,
        overflow: 'hidden',
        borderColor: '#e4e4e4',
        borderWidth: 1, 
    },  
    header: {
        // flex: 1,
        height: 160,
        
    },
    image: {
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
        flex: 1
    },
    body: {
        paddingHorizontal: 16,
        paddingVertical: 9
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1,
        // elevation: 1,
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 15
    },
    textBody: {
        fontWeight: '100',
        color: '#545454',
        fontSize: 15,
        lineHeight: 18,
        marginTop: 8
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 4,
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#4da75c',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    },  
    buttonText: {
        fontWeight: '700',
        fontSize: 13,
        color: 'white'
    }
})

export default Iklan