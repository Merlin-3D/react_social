import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from "@expo/vector-icons";

import color from '../style/colors';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from 'react-native';
import { Row } from 'native-base';

const AddExperienceScreen = (props) => {
    const [selectedValue, setSelectedValue] = useState("java");
    

    return(
        <ScrollView>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Input placeholder="titre" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Input placeholder="nom de l'entreprise" />
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Input placeholder="Lieu" />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                    alignItems:'center',
                marginLeft:20,
                marginRight: 20,
                marginTop:10,
                marginBottom:15,
                borderBottomWidth:1,
                borderBottomColor:color.grey
            }}>
                <Text style={{
                    color: color.grey,
                    fontSize:20
                }}>Types</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '50%'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="CDI" value="CDI" />
                    <Picker.Item label="CDD" value="CDD" />
                    <Picker.Item label="Stage" value="Stage" />
                </Picker>
                
            </View>
            <View style={{
                marginLeft:10,
                marginTop:10
            }}>
                <Input placeholder="taches" />
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
                    <Text style={{color: "#318cc9" ,fontSize:19, fontWeight:'bold', textAlign:'center' }}> Ajouter</Text>
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

export default AddExperienceScreen