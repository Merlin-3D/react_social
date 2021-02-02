import React from 'react';
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

import color from '../style/colors';


const Search =() => {


        return(
           <View>
                <View style={{
                        width: '90%',
                        height: 30,
                        borderRadius:25,
                        marginVertical: 7,
                        marginHorizontal:25,
                        flexDirection:'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        
                    }}>
                        
                        <Input placeholder="rechercher sur StayLinked" style={{
                        marginTop:25,
                        color: color.background,
                        borderBottomWidth: 0,
                        
                        
                        }} 
                        rightIcon = {
                            <Icon  style={{marginLeft: 8, color: color.background, marginTop: 20}}
                                name="search"
                                size={22}
                            />
                        }
        
                         inputContainerStyle={{borderBottomWidth: 0}} />
                    
                        
                    </View>
           </View>
        )
}


export default Search