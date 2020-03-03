import React from 'react'
import {View, TextInput, Image} from 'react-native'
import searchIcon from '../assets/icon/search.png'
import promoIcon from '../assets/icon/promo.png'

class SearchBar extends React.Component {
    render() {
        return(
            <>
                <View style={{flexDirection: 'row', marginHorizontal: 16, paddingTop: 10}}>
                    <View style={{flex: 1}}>
                        <TextInput style={{ borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 35, height: 42, fontSize: 13, paddingLeft: 45, paddingRight: 20, position: 'relative', backgroundColor: 'white' }} placeholder="What do you want from mehh..." />
                            <Image source={searchIcon} style={{position: 'absolute', top: 7, left: 10}} />
                    </View>
                    <View style={{width: 20, marginLeft: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={promoIcon} />
                    </View>
                </View>
            </>
        )
    }
}

export default SearchBar