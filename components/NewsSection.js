import React from 'react'
import { View, Image, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const NewsSection = ({navigation}) => {
      return(
          <View style={{marginHorizontal: 16, borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 18}}>
          <View style={{borderRadius: 6, overflow: 'hidden', position: 'relative'}}>
            <Image source={require('../assets/dummy/sepak-bola.jpg')} style={{height: 200, width: '100%'}} />
            <View style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', top: 0, left: 0, opacity: 0.27}}></View>
            <View style={{ width: 70, height: 20, position: 'absolute', top: 10, left: 10 }}>
              <Image source={require('../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 6}}>GO-NEWS</Text>
            <Text style={{fontSize: 14, color: '#545454', marginBottom: 11}}>Ferry Rothin Sulu selamatkan penatli, Indonesia juara ASEAN GAMES 2020.</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', borderRadius: 4, padding: 10, alignSelf: 'flex-end',}}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}} onPress={() => alert(navigation)}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
}

export default NewsSection