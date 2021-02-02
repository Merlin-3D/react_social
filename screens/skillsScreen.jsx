//Ecran compétences
import React from 'react';
import { StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';
import {View, Text, Image} from "react-native"
import color from '../style/colors';
import { useNavigation } from '@react-navigation/native';


const SkillsScreen = (props) => {

    return(
        <View>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('completeProfil') } />
                    <Text style={styles.textHeader}>Ajouter vos compétences</Text>                  
                </View>
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Input placeholder="Compétence(ex :Expert android)" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                
                <Input placeholder="Vous pouvez encore ajouter 50 compétences."/>
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
    },
})
export default SkillsScreen