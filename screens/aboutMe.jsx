import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View,Text } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../style/colors';

const AboutMe = (props) => {
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('completeProfil') } />
                    <Text style={styles.textHeader}>A propos</Text>
                </View>
            </View>
            <View style={{
                marginTop:15,
                marginLeft:5
            }}>
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    marginBottom:10
                }}>Decrivez-vous en quelques mots</Text>
                <Input multiline placeholder='resume' />
            </View>
            <View style={{
                    flexDirection: 'row',
                    justifyContent:'center',}}>
             <TouchableOpacity  style={{
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:120,
                    height:45, 
                    color:'#000',
                    borderRadius:20, 
                    marginTop:10,
                    marginLeft:20,
                    borderWidth:1,
                    borderColor:"#318cc9"  ,
                    marginBottom:15                
                }} >
                    <Text style={{color: "#318cc9" ,fontSize:19, fontWeight:'bold', textAlign:'center' }}> Enregistrer</Text>
                </TouchableOpacity>
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

export default AboutMe