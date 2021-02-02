import React, { Component, useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../style/colors';

const Btn = props => {
    return(
        <View>
            <TouchableOpacity  style={{
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:color.buttonColor,
                width:120,
                height:42, 
                color:'#000',
                borderRadius:20, 
                marginHorizontal:7
                
            }}>
                <Text style={{color: color.background}}> {props.count} </Text>
                <Icon name={props.name} size={20} color={color.background} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default Btn