import React from 'react'
import { Text, View, Image, ScrollView, ProgressBarAndroid, StatusBar } from 'react-native'
import SearchBar from '../components/SearchBar'
import GopayHeader from '../components/GopayHeader'
import GopayBody from '../components/GopayBody'
import Feature from '../components/Feature'
import NewsSection from '../components/NewsSection'
import GoFoodBanner from '../components/GoFoodBanner'
import GoFood from '../components/GoFood'
import BottomNav from '../components/BottomNav'
import 'react-native-gesture-handler'
import TopPick from '../components/TopPicks'

class App extends React.Component {
  render() {
    const {navigation} = this.props
    return(
      <View style={{flex: 1}}>
        <StatusBar  
          backgroundColor="#fff"  
          barStyle="dark-content"   
        /> 
        <ScrollView style={{backgroundColor: 'white', flex: 1}} showsVerticalScrollIndicator={false}>
          {/* SearchBar  */}
          <SearchBar />

          <ProgressBarAndroid styleAttr="Horizontal" color="#4da75c" progress={0.5} />

          {/* Gopay  */}
          <GopayHeader />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, marginHorizontal: 16, backgroundColor: '#2F65BD', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <GopayBody title="Pay" icon={require('../assets/icon/pay.png')} /> 
            <GopayBody title="Pay" icon={require('../assets/icon/nearby.png')} /> 
            <GopayBody title="Pay" icon={require('../assets/icon/topup.png')} /> 
            <GopayBody title="Pay" icon={require('../assets/icon/more.png')} /> 
          </View>          

          {/* Main Feature  */}
          <View style={{marginHorizontal: 0, marginTop: 18, flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <Feature icon={require('../assets/icon/go-ride.png')} title="GoRide" onPress={() => navigation.navigate('GoRide')} />
              <Feature icon={require('../assets/icon/go-car.png')} title="GoCar" onPress={() => navigation.navigate('GoCar')} />
              <Feature icon={require('../assets/icon/go-food.png')} title="GoFood" onPress={() => navigation.navigate('GoFood')} />
              <Feature icon={require('../assets/icon/go-bluebird.png')} title="GoBluebird" onPress={() => navigation.navigate('GoBluebird')}  />
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
              <Feature icon={require('../assets/icon/go-send.png')} title="GoSend" onPress={() => navigation.navigate('Send')} />
              <Feature icon={require('../assets/icon/go-pulsa.png')} title="GoPulsa" onPress={() => navigation.navigate('GoPulsa')} />
              <Feature icon={require('../assets/icon/go-deals.png')} title="GoDeals" onPress={() => navigation.navigate('GoDeals')} />
              <Feature icon={require('../assets/icon/go-more.png')} title="More" onPress={() => navigation.navigate('More')} />
            </View>
          </View>

          <View style={{marginHorizontal: 16, marginTop: 20, marginBottom: 16,}}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>Top picks for you</Text>
            <ScrollView horizontal style={{flexDirection: 'row', width: '100%', paddingTop: 16}} showsHorizontalScrollIndicator={false}>
              <TopPick title="All" active={true}/>
              <TopPick title="Entertaiment"/>
              <TopPick title="Food"/>
              <TopPick title="Lifestyle"/>
              <TopPick title="Payments"/>
              <TopPick title="Transport"/>
              <TopPick title="Updates"/>
            </ScrollView>
          </View>

          <View style={{marginHorizontal: 16, marginBottom: 10, borderWidth: 0.5, borderColor: '#e4e4e4'}}></View>

          {/* SCROLL GOFOOD */}
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontWeight: 'bold'}}>gofood</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
              <Text style={{fontWeight: 'bold'}}>Recomended restos</Text>
              <Text style={{color: '#4da75c'}}>See All</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft: 16, marginBottom: 20}}>
            <GoFood img={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Bangka" />
            <GoFood img={require('../assets/dummy/go-food-gm.jpg')} title="Mie Ayam GM" />
            <GoFood img={require('../assets/dummy/go-food-kfc.jpg')} title="KFC Pondok Indah" />
            <GoFood img={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Orins" />
            <GoFood img={require('../assets/dummy/go-food-pak-boss.jpg')} title="Ayam Bakar Pak Boss" />
            <GoFood img={require('../assets/dummy/go-food-banka.jpg')} title="Martabak Bangka" />
            <GoFood img={require('../assets/dummy/go-food-gm.jpg')} title="Mie Ayam GM" />
            <GoFood img={require('../assets/dummy/go-food-kfc.jpg')} title="KFC Pondok Indah" />
            <GoFood img={require('../assets/dummy/go-food-orins.jpg')} title="Nasi Orins" />
            <GoFood img={require('../assets/dummy/go-food-pak-boss.jpg')} title="Ayam Bakar Pak Boss" />
          </ScrollView>
          {/* END SCROLL GO FOOD */}
          
          <View style={{marginHorizontal: 16, marginBottom: 16, borderWidth: 0.5, borderColor: '#e4e4e4'}}></View>

          {/* News Section */}
          <NewsSection />

          {/* GoFood Banner Section */}
          <GoFoodBanner /> 

          {/* Nearby Go Food  */}
          <View>
            <View style={{marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
              <View>
                <Image source={require('../assets/logo/go-food.png')} />
                <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurant</Text>
              </View>
              <View style={{justifyContent: 'flex-end', alignContent: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: '#43AB4A'}}>See All</Text>
              </View>
            </View>

          </View>
        </ScrollView>

        {/* Bottom Navigation  */}
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <BottomNav img={require('../assets/icon/home-active.png')} title="Home" active={true} />
          <BottomNav img={require('../assets/icon/order.png')} title="Order" active={false} />
          <BottomNav img={require('../assets/icon/help.png')} title="Home" active={false} />
          <BottomNav img={require('../assets/icon/inbox.png')} title="Home" active={false} />
          <BottomNav img={require('../assets/icon/account.png')} title="Home" active={false} />
        </View>
      </View>
    )
  }
}

export default App;