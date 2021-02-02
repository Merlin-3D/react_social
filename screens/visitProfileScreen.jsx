import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import VisitFormations from '../components/visitFormation';
import VisitCompetences from '../components/visitCompetences';
import Contact from '../components/contact';
import { useLinkProps } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



const VisitProfileScreen = (props) =>{

    const navigation = useNavigation()
    return(
        <ScrollView >
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
           
            
            <View style={styles.intro}>
                <Text style={{fontSize:23,color:color.grey}}>Jordan Foute</Text>
                <Text style={{fontSize:18,color:"#000",marginVertical:5}}>Etudiant a l'ecole nationale superieur polytechnique de douala</Text>
                <Text style={{fontSize:13,color:"#000", marginBottom:5}}>Douala, Cameroun</Text>
                    <TouchableOpacity  style={{
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    width:150,
                    height:42, 
                    color:'#000',
                    borderRadius:20, 
                    marginTop:10,
                    marginBottom: 10,
                    marginLeft:5,
                    borderWidth:1,
                    borderColor:"#318cc9"                  
                }}>
                    <Text style={{color: "#318cc9" }}> Contacter </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.about}>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginRight:20}}>
                    <Text style={{fontSize:18}}>A propos</Text>
                </View>
                <Text style={{marginTop:7, marginBottom:7, color: "#000"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatum veritatis perferendis quisquam minus deleniti iusto nisi praesentium, architecto ea quae debitis obcaecati ducimus modi iste blanditiis adipisci ipsa? Dolorum. </Text>
            </View>
            <View style={styles.about}>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginRight:20}}>
                    <Text style={{fontSize:18}}>Formations</Text>
                </View>
                <VisitFormations />
                <VisitFormations />
                <VisitFormations />
            </View> 
            <View style={styles.about}>
                <Text style={{fontSize:18, marginBottom:7}}>Competences </Text>
                <VisitCompetences />
                <VisitCompetences />
                <VisitCompetences />
            </View>

            <View style={styles.about}>
                <Text style={{fontSize:18, marginBottom:7}}>Contacts </Text>
                <Contact/>
                <Contact/>
                <Contact/>
                
            </View>
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
        marginTop:60,
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
export default VisitProfileScreen;