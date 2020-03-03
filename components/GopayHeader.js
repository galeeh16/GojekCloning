import React from 'react'
import { View, Image, Text} from 'react-native'
import gopayIcon from '../assets/icon/gopay.png'

class GopayHeader extends React.Component {
    render() {
        return(
            <View style={{marginHorizontal: 16, marginTop: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 14}}>
                    <View>
                        <Image source={gopayIcon} />
                    </View>
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>Rp 2.305.000</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default GopayHeader