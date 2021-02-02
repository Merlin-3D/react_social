import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from "@expo/vector-icons";

import color from '../style/colors';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from 'react-native';

const PrivateInfos = (props) => {
    const [selectedValue, setSelectedValue] = useState("java");

    return(
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('completeProfil') } />
                    <Text style={styles.textHeader}>Informations Personelles</Text>
                    
                </View>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginLeft:10,
                marginTop:20
            }}>
                <Text style={{
                    fontSize:16,
                    marginRight:8,
                    fontWeight:'bold'
                }}>photo de profil :</Text>
                <TouchableOpacity  style={styles.avatarPlaceholder}>
                  <Image style={styles.avatar} source={require("../assets/header_information.jpg")} />
                  <Ionicons   name="ios-add" size={49} color="#fff" style={{marginTop:2, marginLeft:2}} />
              </TouchableOpacity>
                                   
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Prenom</Text>
                <Input placeholder="votre prenom" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Nom</Text>
                <Input placeholder="votre nom" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Profession actuel</Text>
                <Input placeholder="cela sera le titre de votre profil" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Formation actuel</Text>
                <Input placeholder="cursus de formation actuel" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Pays</Text>
                <Input placeholder="pays de residence" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Ville</Text>
                <Input placeholder="Ville de residence" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10,
                marginBottom:15,
                borderBottomWidth:1,
                borderBottomColor:color.grey
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Secteur de competence</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '77%' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="secteur Informatique" value="secteur Informatique" />
                        <Picker.Item label="secteur Electrique" value="secteur Electrique" />
                        <Picker.Item label="secteur de robotique" value="secteur de robotique" />
                        <Picker.Item label="secteur genie civil" value="secteur genie civil" />
                        <Picker.Item label="secteur genie maritime" value="secteur genie maritime" />
                        <Picker.Item label="secteur hygene et securite" value="secteur hygene et securite" />
                        <Picker.Item label="secteur telecommunication" value="secteur telecommunication" />
                        <Picker.Item label="secteur genie mecanique" value="secteur genie mecanique" />
                        <Picker.Item label="secteur comptable" value="secteur comptable" />
                        <Picker.Item label="secteur musique" value="secteur musique" />
                    </Picker>
                
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
        </ScrollView>
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
    avatar: {
        marginBottom: 10,
        borderRadius: 50,
        width: 90,
        height: 90,
        position: 'absolute'
        
      
      },
      avatarPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e2e6',
        borderRadius: 50,
        width: 90,
        height: 90,
        marginLeft: "7%"
      }
})

export default PrivateInfos