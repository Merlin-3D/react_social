import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';
import { Input } from 'react-native-elements'
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../style/colors';


const Header = (props) => {
    return (
        <View>
            <Fragment>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent: "space-between",
                    marginHorizontal: 8,
                    margin: 3,
                    height: 50
                }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 30 }}>StayLinked</Text>
                 
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.profil, {marginRight:5}}>
                            <Image style={styles.image}
                                source={require("../assets/header_information.jpg")}
                            />
                        </View>
                        <Icon onPress={props.onPress}   name="moon-o" size={24} color={color.background} style={{marginLeft: 8,marginRight:5}}/>
                        <Icon onPress={props.onPress}   name="send-o" size={24} color={color.background} style={{marginLeft: 8,marginRight:5}}/>

                    </View>
                </View>
              
            </Fragment>
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

export default Header