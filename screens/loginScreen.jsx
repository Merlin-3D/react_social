import React from "react";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import color from '../style/colors'

import Inputs from '../components/input';
import Account from '../components/account';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button} from 'react-native-elements';


/*let [fontsLoaded] = useFonts({
  Inter_900Black,
});*/

const LoginScreen = (props) => (
  
  <View style={styles.container}>
      <View style={styles.backColor}>
            <Text style={styles.tongoStyle}>StayLinked</Text>
            <Input style={styles.inputText}
                inputContainerStyle={styles.inputContainer}
                label="Username"
                labelStyle={styles.labelStyle}
                placeholder='tonmail@gmail.com'
                leftIcon={
                    <Icon
                    name='user'
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
            <Button onPress={() => props.navigation.navigate("navhome")}  title="Connexion" buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle}/> 
            <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>      
            <View style={styles.signin}>
              <Text style={{color: "#fff", fontSize: 18, fontFamily: 'MontserratAlternates-Bold.otf'}}>Pas de compte? </Text>
              <Text style={{color: "#001540", fontSize: 18,}} onPress={() => props.navigation.navigate("register")}>Enregistre-toi</Text>
            </View>
      </View>
  </View>
);
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    forgotPassword: {
      color: '#001540',
      fontSize: 18,
      textAlign: "center",
      marginVertical: 10,
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
        backgroundColor: color.background,
    },
    signin: {
      flexDirection: "row",
      justifyContent: "center"
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
  
  export default LoginScreen;