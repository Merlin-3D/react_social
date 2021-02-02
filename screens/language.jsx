import React from 'react';
import { StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';
import {View, Text, Image} from "react-native"
import color from '../style/colors';
import { useNavigation } from '@react-navigation/native';


const Language = (props) => {

    return(
        <View>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('completeProfil') } />
                    <Text style={styles.textHeader}>Ajouter une langue</Text>                  
                </View>
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Langue *</Text>
                <Input />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
               <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Niveau </Text> 
                <Input>
                    <Icon name='chevron-down' style={{alignSelf: 'flex-end'}}/>     
                </Input>
            </View>
                       
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:55,
        borderBottomWidth: 0.9,
        borderBottomColor: color.greyAccent
             
    },
    viewIcon: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    textHeader: {
        marginHorizontal:20,
        fontSize:23,
        fontWeight: "900"
    }
})
export default Language