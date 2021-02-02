import React, {useState} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchCategorie = props => {

    return(
        <View style={styles.container}>
            <View style={styles.textsHeader}>
                <Text>
                    {props.categorie}
                </Text>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 200,
        margin:3, 
        flexDirection:'row',
        backgroundColor :'#FFF',  
        borderRadius:10,
    },
    textsHeader:{
        paddingLeft:5    
    }
 })
 export default SearchCategorie;