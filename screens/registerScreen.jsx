import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity,Image} from "react-native";
import color from '../style/colors'
import Inputs from '../components/input';
import Account from '../components/account';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input, Button} from 'react-native-elements';



const RegisterScreen = (props) => {
  return (
  <View style={styles.container}>
      <View style={styles.backColor}>
            <Text style={styles.tongoStyle}>StayLinked</Text>
              
            <Input style={styles.inputText}
                inputContainerStyle={styles.inputContainer}
                label="Username"
                labelStyle={styles.labelStyle}
                placeholder='nom utilisateur'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='white'/>
                }
            />
            <Input style={styles.inputText}
                inputContainerStyle={styles.inputContainer}
                label="Email"
                labelStyle={styles.labelStyle}
                placeholder='adresse email'
                secureTextEntry={true}
                leftIcon={
                    <Icon
                    name='envelope'
                    size={24}
                    color='white'/>
                }
            />
            <Input style={styles.inputText}
                inputContainerStyle={styles.inputContainer}
                label="Telephone"
                labelStyle={styles.labelStyle}
                placeholder='telephone'
                secureTextEntry={true}
                leftIcon={
                    <Icon
                    name='phone'
                    size={24}
                    color='white'/>
                }
            />
            <Input style={styles.inputText}
                inputContainerStyle={styles.inputContainer}
                label="Password"
                labelStyle={styles.labelStyle}
                placeholder='mot de passe'
                secureTextEntry={true}
                leftIcon={
                    <Icon
                    name='lock'
                    size={24}
                    color='white'/>
                }
            />
            <Button title="Inscription" onPress={() => props.navigation.navigate('navhome')}  buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}/> 
               
            <View style={styles.signin}>
              <Text style={{color: "#fff", fontSize: 18,}}>As-tu un compte? </Text>
              <Text style={{color: "#001540", fontSize: 18,}} onPress={() => props.navigation.navigate('login')}>Connecte toi</Text>
            </View>
      </View>
   
  </View>
  )
};
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    titleStyle: {fontWeight: "100"},
    buttonStyle: {
      width: 230,
      alignSelf: "center",
      backgroundColor: color.primary,
      borderRadius: 15,

    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    backColor: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        opacity: 0.8,
        backgroundColor: "#001540"
    },
    signin: {

      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10
    },
    tongoStyle: {
      textAlign: "center",
      color: "#fff",
      fontSize: 48,
      fontWeight: "700",
      marginBottom: 70,
    },
    inputContainer: {
      borderColor: "#fff",
      width: "85%",
      marginBottom: 10,
      alignSelf: "center"
  },
  labelStyle: {
    color: "#fff",
    marginHorizontal: 40,
    fontSize: 18,
  },
    inputText: {
      color: "#fff",
      marginLeft: 5,
  },
  '::placeholder':{
    color: "#fff",
  }
  });
  
  export default RegisterScreen;