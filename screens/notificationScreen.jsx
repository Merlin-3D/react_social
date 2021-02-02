import React from 'react';
import {View, FlatList, Text, Image, Appearance, Alert} from 'react-native';
import data from '../constants/notificationData'
import Notification from '../components/notification'
import HeaderNotification from '../components/headerNotification'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const NotificationScreen = (props) =>{

    // const handleColor = () => {
    //     // Alert.alert('toggle button')
    //     props.navigation.navigate('search')
    // }
    const navigation = useNavigation()
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('search')}>
                <HeaderNotification  />
            </TouchableOpacity>
            <View style={{justifyContent:'center',}}>
                <FlatList 
                    t
                    data= {data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (<Notification 
                                                image={item.image}
                                                name={item.name} 
                                                publication={item.publication} 
                                                hourOfpublication={item.hourOfpublication}
                                                iconName={item.iconName}
                                                 />) 
                                }
            
                />
            </View>
        </View>
    );
}
export default NotificationScreen;