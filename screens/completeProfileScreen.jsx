import React from 'react';
import { StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import {View, Text, Image} from "react-native"
import color from '../style/colors';
import { useNavigation } from '@react-navigation/native';


const CompleteProfilScreen = (props) => {

    const navigation = useNavigation()

    return(
        <View>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('profil') } />
                    <Text style={styles.textHeader}>Ameliorer votre Profile</Text>
                    
                </View>
            </View>
            
            <View style={{
                height:100,
                backgroundColor:color.grey,
                marginTop:30,
                flexDirection:'row',
                alignItems:'center'
            }}>
                
                <View style={styles.profil}>
                                    <Image style={styles.image}
                                        source={require("../assets/header_information.jpg")}
                                    />
                </View> 
                <Text style={{marginHorizontal:15, fontSize:25, color:"#fff"}}>Faites vous connaitre...</Text>
            </View>

            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>Informations Personelles</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('privateInfos')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>A propos de vous</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('aboutMe')} ><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>Expérience professionnelle</Text>
                <TouchableOpacity onPress={() => navigation.navigate('addExperienceScreen')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>Formations</Text>
                <TouchableOpacity onPress={() => navigation.navigate('addFormationScreen')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>Compétences</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('skillsScreen')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}>Projets realisés</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('finProScreen')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            <View style={styles.cardInfos}>
                <Text style={{fontSize:18, color: color.grey,fontWeight:'bold'}}> Langues</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('language')}><Icon name="plus-circle" size={38} color={color.grey} /></TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardInfos: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:12,
        padding:5,
        backgroundColor:color.greyAccent,
        height:60,
        borderRadius:10

    },
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
        fontSize:25,
        fontWeight: "900"
    },
    profil: {
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor:color.greyAccent,
        marginLeft:3,
        marginBottom:30
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70,
        margin:5
    },
})
export default CompleteProfilScreen