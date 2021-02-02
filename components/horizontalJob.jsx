import React, {useState} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";

const HorizontalJob = props => {

    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.image}
                    source={props.image}/>
            </View>
            <View style={styles.textsHeader}>
                <Text>
                    {props.job}
                </Text>
                <Text style={{marginTop: 10}} >
                    {props.jobLocation}
                </Text>               
            </View>          
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        height: 240,
        width: 200,
        borderRadius:10,
        flexDirection:'column',
        backgroundColor :'#FFF',  
        margin:3,
        marginBottom:5
    },

    left:{
        
        paddingLeft:5,
        textAlign:'right',
        marginBottom:10
    },
    image: {
        height:45,
        width:45,
        borderRadius:50,
        borderColor:'#000',
        marginTop:5,
        marginRight:10,
    },
    textsHeader:{
        width: '60%',
        paddingLeft:5
      
    },
    button:{
        flexDirection:'row'
    }
 })
 export default HorizontalJob;