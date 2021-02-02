import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import UserPermission from '../utilities/UserPermissions'
import * as ImagePicker from "expo-image-picker"


const Avatar = () => {

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

    return(
        <View>
            <TouchableOpacity onPress={() => handlePickAvatar()} style={styles.avatarPlaceholder}>
                  <Image style={styles.avatar} source={{uri: avatar}} />
                  <Ionicons   name="ios-add" size={49} color="#fff" style={{marginTop:2, marginLeft:2}} />
              </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        marginBottom: 10,
        borderRadius: 50,
        width: 100,
        height: 100,
        position: 'absolute'
        
      
      },
      avatarPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#e1e2e6',
        borderRadius: 50,
        width: 100,
        height: 100,
        marginLeft: "37%"
      }
})

export default Avatar