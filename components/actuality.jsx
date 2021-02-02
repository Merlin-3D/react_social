import React, {useState} from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import color from '../style/colors'
import Inputs from './input';
import Account from './account';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button} from 'react-native-elements';
import Btn from './button';
import ViewMoreText from 'react-native-view-more-text';

const Actuality = props => {

 
    return (
        <View style={styles.container}>
            <View style={styles.headerCard}>
                <TouchableOpacity onPress={props.onPress}>
                <View style={{
                                borderRadius:50,
                                marginRight:10}}>
                    <Image 
                        style={styles.imageHeaderStyle}
                        source={props.image}/>
                </View>
                </TouchableOpacity>
                <View style={styles.textsHeader}> 
                    <Text style={{ fontWeight:'bold',
                                   fontSize:18 }}>
                        {props.name}
                    </Text>
                    <Text style={{color: "#696969"}}>
                        {props.heure}
                    </Text>
                </View>
            </View>
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={(onPress) => <Text style={{color: "#696969"}} onPress={onPress}>Afficher la suite</Text>}
                renderViewLess={(onPress) => <Text style={{color: "#696969"}} onPress={onPress}>Reduire</Text>}
                style={{marginLeft: 5}}>

                <Text style={{color:'#000', marginBottom:12, marginLeft: 10, fontSize: 17}}>
                        {props.description}
                </Text>
            </ViewMoreText>
            <Image 
                style={styles.imageStyle}
                source={props.imagePrincipal}
                />
            <View style={styles.bottomCard}>
                <Btn name='thumbs-o-up' count='0' />
                <Btn name='comment-o' count='2'/>
                <Btn name='share-square-o' count='5'/>
            </View>
                 
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor:'#FFF',
        marginBottom: 5
        
    },
    headerCard:{
        flexDirection:'row',
        marginBottom:10,
        marginLeft: 5
    },
    imageStyle: {
        height:400,
        width:'100%',
        marginBottom:15
    },
    imageHeaderStyle: {
        height:45,
        width:45,
        borderRadius:50,
        marginTop:5
    },
    bottomCard: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:10
    }
    
  });
  
  export default Actuality;