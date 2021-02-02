//Projets réalisés
import React, { useState } from 'react';
import { StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements';
import {View, Text, Image} from "react-native"
import color from '../style/colors';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';


const FinalisedProjectScreen = (props) => {

    const [isSelected, setSelection] = useState(false);

    return(
        <View >
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('completeProfil') } />
                    <Text style={styles.textHeader}>Projets réalisés</Text>          
                </View>
            </View>
            <View style={{
                marginLeft:10,
                marginTop:30
            }}>
                <Input placeholder="Nom du projet" />
            </View>
            <View style = {styles.checkboxContainer}>
                <CheckBox
                    title='Projet en cours'
                    checked ={{isSelected}}
                    
                    // onPress={() => setSelection({checked: !{isSelected}})}
                    style= {styles.checkBox}/>
                
            </View>
            <View style={styles.date}>
                <View style={{
                        width:'50%'
                }}>
                    <Input placeholder="Date de debut"  />
                </View>
                <View style={{
                        width:'50%'
                }}>
                    <Input placeholder="Date de fin" />
                </View>               
            </View>
            <View style={{
                marginTop:15,
                marginLeft:5
            }}>
                <Text style={{
                    fontSize:12,
                    marginBottom:10,
                    marginLeft:5
                }}>Créateur</Text>
                <View style={{
                        marginLeft:5
                }}>
                    <Image style={styles.avatar} source={require("../assets/header_information.jpg")}/>
                    <Input placeholder="Nakeva" style={{marginLeft:50}} />                   
                </View>

            </View>
            <View>
                <Text style={{
                                        fontSize:15,
                                        alignSelf:'flex-end',
                                        fontWeight:'bold',
                                        color:'#0000FF',
                                        marginRight:10
                    }}>Ajouter un créateur</Text>
                <Input />  
                <Input placeholder="Url du projet">
                    <Icon name='chevron-down' style={{alignSelf: 'flex-end'}}/>     
                </Input> 
                 <Input placeholder="Descriptif"/> 
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
    checkboxContainer:{
        flexDirection:'row',
        marginBottom:20,
        
    },
    checkbox:{
        alignSelf:"center"
    },
    label:{
        margin:8
    },
    avatar: {
     
        borderRadius: 50,
        width: 30,
        height: 30,   
        position:'absolute'
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
    date:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
export default FinalisedProjectScreen