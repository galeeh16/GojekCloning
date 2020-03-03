import React from 'react'
import {Text, View, ScrollView, TextInput, StyleSheet, Image } from 'react-native'
import InputSearch from '../components/GoFoodScreen/Search'
import Kupon from '../components/GoFoodScreen/Kupon'
import Banner from '../components/GoFoodScreen/Banner'
import Iklan from '../components/GoFoodScreen/Iklan'
import Food from '../components/GoFoodScreen/Food'
import ListFood from '../components/GoFoodScreen/ListFood'

class GoFoodPages extends React.Component {
    render() {
        return (
            <>
            <View style={{backgroundColor: 'white'}}>
                <InputSearch /> 
            </View>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <Kupon />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft: 16, marginBottom: 20}}>
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                    <Banner img={require('../assets/dummy/food-banner.jpg')} />
                </ScrollView>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#eee', marginHorizontal: 16, marginBottom: 16}}></View>
                <Iklan />
                <View style={{borderBottomWidth: 1, borderBottomColor: '#eee', marginHorizontal: 16, marginBottom: 16, marginTop: 16}}></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft: 16, marginBottom: 20}}>
                    <Food img={require('../assets/dummy/go-food-kfc.jpg')} title="Nasi Ayam Bakar" price="29.000" />
                    <Food img={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka" price="30.000" />
                    <Food img={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" price="39.000" />
                    <Food img={require('../assets/dummy/go-food-kfc.jpg')} title="Nasi Ayam Bakar" price="29.000" />
                    <Food img={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka" price="30.000" />
                    <Food img={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" price="39.000" />
                    <Food img={require('../assets/dummy/go-food-kfc.jpg')} title="Nasi Ayam Bakar" price="29.000" />
                    <Food img={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka" price="30.000" />
                    <Food img={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" price="39.000" />
                </ScrollView>

                <View style={{borderWidth: 1, borderColor: '#eee', marginBottom: 16, marginHorizontal: 16}}></View>
                
                <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Recomended restos</Text>
                        <Text style={{marginTop: 4}}>Try these and thank us later!</Text>
                    </View>
                    <View>
                        <Text style={{color: '#4da75c'}}>See All</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal: 16, marginTop: 16}}>
                    <ListFood image={require('../assets/dummy/kopi.jpeg')} title="Kopi Kenangan, Cipudad" category="Beverages, Coffee" distance="1.8 km" />
                    <ListFood image={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka, PIM" category="Fast Food" distance="4 km" />
                    <ListFood image={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" category="Fast Food" distance="2.9 km" />
                    <ListFood image={require('../assets/dummy/kopi.jpeg')} title="Kopi Kenangan, Cipudad" category="Beverages, Coffee" distance="1.8 km" />
                    <ListFood image={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka, PIM" category="Fast Food" distance="4 km" />
                    <ListFood image={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" category="Fast Food" distance="2.9 km" />
                    <ListFood image={require('../assets/dummy/kopi.jpeg')} title="Kopi Kenangan, Cipudad" category="Beverages, Coffee" distance="1.8 km" />
                    <ListFood image={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Banka, PIM" category="Fast Food" distance="4 km" />
                    <ListFood image={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Ayam Orins" category="Fast Food" distance="2.9 km" />
                </View>

            </ScrollView> 
            </>   
        )
    }
}

export default GoFoodPages