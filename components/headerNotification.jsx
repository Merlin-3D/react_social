import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';
import { Input } from 'react-native-elements'
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../style/colors';


const HeaderNotification = (props) => {
    return (
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent: "space-between",
                    height:55,
                    borderBottomWidth: 0.9,
                    borderBottomColor: color.greyAccent,
                   
                }}>
                    <Text style={{ color: '#000', fontSize: 25, marginHorizontal:20, fontWeight:'900' }}>Notifications</Text>
                    
                 
                     <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius:50, backgroundColor:'#E9E9E9',height:45,width:45}}>           
                        <Icon onPress={props.onPress}   name="search" size={24} color={color.background} style={{marginLeft: 8,marginRight:5}}/>
                     </View>
                </View>
        
    )
}

const styles = StyleSheet.create({
    logo: {
        color: "#001540",
        fontWeight: 'bold',
        fontSize: 18 
    },
    profil: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50
    }
})

export default HeaderNotification