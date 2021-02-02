import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import Formations from '../components/formation';
import Competences from '../components/competences';
import { useLinkProps } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



const ProfileScreen = (props) =>{

    const navigation = useNavigation()
    return(
        <ScrollView >
            <View style={styles.header}>
                <View style={styles.viewIcon}>
                
                    <Text style={styles.textHeader}>Votre Profil</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center'}} > 
                    <Icon style={{marginRight:10, color: color.grey}} name="cog" size={25}  />
                </TouchableOpacity>
            </View>
            <View style={{
                height:140,
                backgroundColor:color.background
            }}>
                <View style={styles.profil}>
                                    <Image style={styles.image}
                                        source={require("../assets/header_information.jpg")}
                                    />
                </View> 
            </View>
            <View style={{alignItems:'flex-end',flexDirection:'row', marginTop:35,justifyContent:'flex-end',marginRight:15}}><Icon name="pencil" color={color.background}  size={25}  /></View>
            
            <View style={styles.intro}>
                <Text style={{fontSize:23,color:color.grey}}>Jordan Foute</Text>
                <Text style={{fontSize:18,color:"#000",marginVertical:5}}>Etudiant a l'ecole nationale superieur polytechnique de douala</Text>
                <Text style={{fontSize:13,color:"#000", marginBottom:5}}>Douala, Cameroun</Text>
            </View>
            <View style={styles.about}>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginRight:20}}>
                    <Text style={{fontSize:18}}>A propos</Text>
                    <Icon color={color.background} name="pencil"  size={20} />
                </View>
                <Text style={{marginTop:7, marginBottom:7}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatum veritatis perferendis quisquam minus deleniti iusto nisi praesentium, architecto ea quae debitis obcaecati ducimus modi iste blanditiis adipisci ipsa? Dolorum. </Text>
            </View> 
            <View style={styles.post}>
                 <Text style={{fontSize:18}}> Publications </Text>
                    <TouchableOpacity  style={{
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:170,
                    height:42, 
                    color:'#000',
                    borderRadius:20, 
                    marginTop:20,
                    marginLeft:20 ,
                    borderWidth:1,
                    borderColor:"#318cc9"                  
                }}>
                    <Text style={{color: "#318cc9" }}> Commencer un post </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{
                    fontSize:15,
                    color:"#318cc9",
                    fontWeight:'bold',
                    textAlign:'right',
                    margin:10
                }}>
                    Voir toutes mes Publications
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.about}>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginRight:20}}>
                    <Text style={{fontSize:18}}>Formations</Text>
                </View>
                <Formations />
                <Formations />
                <Formations />
            </View> 
            <View style={styles.about}>
                <Text style={{fontSize:18, marginBottom:7}}>Competences </Text>
                <Competences />
                <Competences />
                <Competences />
            </View>

            <View style={styles.about}>
                <Text style={{fontSize:18, marginBottom:7}}>Centre d'interet </Text>
                
            </View>

            <TouchableOpacity  style={{
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:370,
                    height:50, 
                    color:'#000',
                    borderRadius:20, 
                    marginTop:40,
                    marginLeft:20,
                    borderWidth:1,
                    borderColor:"#318cc9"  ,
                    marginBottom:15                
                }} onPress={() => navigation.navigate('completeProfil')}>
                    <Text style={{color: "#318cc9" ,fontSize:19, fontWeight:'bold', textAlign:'center' }}> Completer votre profil pour augmenter votre visibilite </Text>
                </TouchableOpacity>

        </ScrollView>
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
    profil: {
        width: 120,
        height: 120,
        borderRadius: 120,
        backgroundColor:color.greyAccent,
        marginTop: 80,
        marginLeft:10,
        
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 110,
        margin:5
    },
    intro: {
        marginTop:15,
        marginLeft:12,
        borderBottomWidth:5,
        borderBottomColor:color.greyAccent
        
    },
    about:{
        marginTop:15,
        marginLeft:12,
        borderBottomWidth:5,
        borderBottomColor:color.greyAccent
    },
    post:{
        marginTop:15,
        marginLeft:12,
        borderBottomWidth:5,
        borderBottomColor:color.greyAccent,
       

    }
})
export default ProfileScreen;