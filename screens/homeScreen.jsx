import React, { useState } from 'react';
import {View, FlatList, Text, Image, Appearance, Alert} from 'react-native';
import Header from '../components/header'
import data from '../constants/data'
import Actuality from '../components/actuality'
import color from '../style/colors';
import Slider from '../components/slider';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const navigation = useNavigation()

    const handleColor = () => {
        Alert.alert('toggle button')
    }

    const [dataAtu, setDataActu] = useState([data])

    return(
        <View style={{flex: 1}}>
            <Header onPress={() => handleColor()}  />
            <ScrollView style={{ backgroundColor:'#C0C1C0'}}>
            <Slider/>
            <View style={{justifyContent:'center'}}>

                {
                    data.map((item, i ) =>
                        <Actuality 
                                                key={i}
                                                onPress={() => navigation.navigate('VisitProfileScreen')}
                                                heure={item.heure} 
                                                name={item.nameUser} 
                                                description={item.description} 
                                                image={item.image}
                                                imagePrincipal={item.imagePrin} />
                    )
                }
                {/*<FlatList 
                    
                    data= {data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (<Actuality 
                                                heure={item.heure} 
                                                name={item.nameUser} 
                                                description={item.description} 
                                                image={item.image}
                                                imagePrincipal={item.imagePrin} />) 
                                }
            
                />*/}
            </View>
            </ScrollView>
            
        </View>
    );
}
export default HomeScreen;