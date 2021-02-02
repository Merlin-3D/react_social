import React from 'react';
import {View, Image,StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';
import data from '../constants/searchData'
import SearchCategorie from '../components/searchCategorie'


const SearchScreen = () =>{
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                    <Icon name="arrow-left" size={25} style={{marginLeft:10}} onPress={() => props.navigation.navigate('profil') } />
                    <View style={{
                        width: '80%',
                        height: 30,
                        borderRadius:25,
                        marginVertical: 8,
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
            </View>
            <ScrollView horizontal={true}>
                    
                            {
                                data.map((item, i ) =>
                                    <SearchCategorie 
                                                            key={i}
                                                            categorie = {item.categorie}  />
                                )
                            }
                   
            </ScrollView>
            <View>
                <Image source={require('../assets/searchImagejpg.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:55,
        borderBottomWidth: 0.9,
        borderBottomColor: color.greyAccent     
    },
    viewIcon: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',      
    },
    textHeader: {
        marginHorizontal:20,
        fontSize:25,
        fontWeight: "900"
    },
})
export default SearchScreen;