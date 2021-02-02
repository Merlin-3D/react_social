import React, {useState} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

const Notification = props => {

    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.image}
                    source={props.image}/>
            </View>
            <View style={styles.textsHeader}>
                <Text style={{ fontWeight:'bold',
                                fontSize:20 }}>
                        {props.name}
                </Text>
                <Text>
                    {props.publication}
                </Text>
                <Text style={{marginTop: 10}} >
                    {props.hourOfpublication}
                </Text>               
            </View>
            <View style={styles.button}>
                <TouchableOpacity  style={{
                    justifyContent:'center',
                    alignItems:'center',
                    width:42,
                    height:42,
                    borderRadius:20, 
                    marginHorizontal:7,
                
                    }}>
                    <Icon name='ellipsis-v' color={color.grey} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        marginTop:1,  
        flexDirection:'row',
        backgroundColor :'#FFF', 
        borderBottomWidth: 0.9,
        borderBottomColor: color.greyAccent
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
        width: '73%',
        paddingLeft:5
      
    }
 })
 export default Notification;