import React from 'react';
import { View, TouchableOpacityn , Text,} from 'react-native'
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'


const Contact = () => {
    return(
        <View style={{display:'flex', flexDirection:'row',marginTop:10,marginBottom:10}}>
                    <View style={{
                        flex:1,
                        backgroundColor: color.buttonColor,
                        height:28,
                        borderRadius: 50,
                        marginRight:6
                    }}>

                    </View>
                    <View style={{
                        flexDirection:'row',
                        flex:7,
                        
                    }}>
                        <View>
                        <Text style={{ marginLeft:8,fontWeight:'bold', fontSize:18}}>twitter</Text>
                        <View style={{flexDirection:'row', marginHorizontal:8}}>
                             <Text>twitter user name </Text>
                        </View>
                        </View>
                    </View>
                </View>
    )
}

export default Contact