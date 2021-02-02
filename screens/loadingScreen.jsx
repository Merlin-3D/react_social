import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native'
import {ProgressBar} from "react-native-paper"
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, RotationCircleLoader, BubblesLoader, CirclesRotationScaleLoader } from 'react-native-indicator'


const LoadingScreen = (props) => {

       useEffect(() => {
            setTimeout(() => {
                props.navigation.navigate('login')
            }, 3000);
       })

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.tongoStyle}>StayLinked</Text>
            <CirclesRotationScaleLoader size={70} />
            <TextLoader textStyle={styles.chargement} text="Loading" />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: 45,
        borderColor: 'blue',
        borderRadius: 10,
        marginTop: 250,
        borderWidth: 0,
        backgroundColor: "rgb(232, 142, 0)",
        justifyContent: "center",
        
    },
    container: {
        backgroundColor: "#001540",
        height: "100%",
        width: "100%",
        justifyContent:"center",
        alignItems: "center"
    },
    tongoStyle: {
        textAlign: "center",
        color: "#fff",
        fontSize: 48,
        fontWeight: "700",
        marginBottom: 70,
    },
    buttonStyle: {
     width: 300,
      alignSelf: "center",
      backgroundColor:"#232142",
      borderRadius: 15,
    },
    titleStyle: {fontWeight: "100"},
    submitText: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginVertical: 10,
    },
    ProgressBar: {
        height: 9,
        width: 250,
        backgroundColor: "white",
        borderRadius: 5,
        
    },
    chargement: {
        color: "white",
        fontSize: 13,
        marginTop: 5
    }

})

export default LoadingScreen