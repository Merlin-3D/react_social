import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { colors } from 'react-native-elements';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../style/colors';
import { Ionicons } from "@expo/vector-icons";
import UserPermission from '../utilities/UserPermissions'
import * as ImagePicker from "expo-image-picker"




const PostScreen = (props) =>{

    const [avatar, setAvatar] = useState()

    const pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.5
          })
      
          if(!result.cancelled) {
            setAvatar(result.uri)
          }
        } catch (error) {
          console.log('error to pick image ', error);
        }
      }
      
      const handlePickAvatar = async () => {
          UserPermission.getCamerapermission()
      
          pickImage()
      }

      const deleteImage = () => {
        setAvatar(null)
      }

    return(
        <View> 
            <ScrollView>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                
                    <Text style={styles.textHeader}>Partager un post</Text>
                </View>
                <TouchableOpacity   > 
                    <Text style={{marginRight:10, fontSize: 17, color: color.grey}}>Publier</Text> 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={styles.profil, {marginLeft:20, marginTop:20, marginRight:13}}>
                                    <Image style={styles.image}
                                        source={require("../assets/header_information.jpg")}
                                    />
                    </View> 
                    <Text style={{fontSize: 20, fontWeight: '900', marginTop:15}}>Jordan Foute</Text>  
                </View>
                <View style={{
                    flexDirection: 'row',
                    margin: 20,
                }}>
                    <Icon name="camera" color={color.grey} style={{marginRight:10}} size={25} />
                    <Icon name="picture-o" onPress={() => handlePickAvatar()}  color={color.grey}  size={25} />
                </View>             
            </View>
            <View >
                 <TextInput numberOfLines={11} editable multiline  style={styles.TextInput} placeholder="De quoi voulez-vous discuter"  />
                 
                 <View style={{
                     flexDirection:'row'
                 }}>
                     <Image style={styles.avatar} source={{uri: avatar}} />
                     {
                         avatar? <Icon onPress={() => deleteImage()} name='times' size={45} style={{
                            position:'absolute',
                            margin:7,
                            color: "#03224c"
                        }} /> : <View></View>
                     }
                     
                 </View>
            </View>

            <TouchableOpacity style={{
                flexDirection:'row',
                justifyContent:'flex-end',
                margin:20
            }}>
               <Text style={{
                   fontSize:15,
                   color:"#03224c",
                   fontWeight:'bold'
               }}> #Publier une Offre d'Emploi</Text>
            </TouchableOpacity>
            
            </ScrollView>
            
        </View>
    );
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
    profil: {
        width: 45,
        height: 45,
        borderRadius: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
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
    TextInput: {
        marginHorizontal:20,
        fontSize:19,
        marginTop:5,
        marginBottom:5,
        textAlignVertical:'top',
       
        
    },
    avatar: {
        width: "100%",
        height: 340,
        margin:5,
        borderRadius:5
    }
})
export default PostScreen;