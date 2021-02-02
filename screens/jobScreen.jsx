import React from 'react';
import {View, FlatList, Text, Image, Appearance, Alert} from 'react-native';
import data from '../constants/jobData'
import Job from '../components/job'
import HorizontalJob from '../components/horizontalJob'
import color from '../style/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from '../components/search';
import { Input } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';





const JobScreen = (props) =>{

    const handleColor = () => {
        Alert.alert('toggle button')
    }

    return(
        <View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent: "space-between",
                height:55, 
                paddingHorizontal: 5.0,                 
                borderBottomWidth: 0.9,
                borderBottomColor: color.greyAccent,
                
                }}>
                <Text style={{ color: '#000', fontSize: 25, fontWeight:'900' }}>Emplois</Text>
                <View>
                    <View style={{
                        width: 240,
                        height: 30,
                        borderRadius:25,
                        marginVertical: 7,
                        flexDirection:'row',
                        alignItems: 'center',
                        borderWidth: 1,}}>
                        <Input 
                            placeholder="rechercher un Emploi" 
                            style={{
                                marginTop:25,
                                color: color.background,
                                borderBottomWidth: 0,}} 
                            rightIcon = {
                                <Icon  style={{marginLeft: 8, color: color.background, marginTop: 20}}
                                    name="search"
                                    size={22}/>}
                            inputContainerStyle={{borderBottomWidth: 0}}/>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor:color.greyAccent}}>
                {/*<ScrollView horizontal={true}>
                    
                    {
                        data.map((item, i ) =>
                            <HorizontalJob 
                                key={i}
                                image={item.image}
                                jobLocation={item.jobLocation}/>
                        )
                    }
                   
                </ScrollView>*/}
                    <View style={{justifyContent:'center'}}>
                        {
                            data.map((item, i ) =>
                                <Job 
                                    key={i}
                                    image={item.image}
                                    job={item.job} 
                                    jobSociety={item.jobSociety}
                                    jobLocation={item.jobLocation}/>
                            )
                        }
                        {/* <FlatList 
                            data= {data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => (<Job 
                                                        image={item.image}
                                                        job={item.job} 
                                                        jobLocation={item.jobLocation}                                                  />) 
                                        }
                    
                        /> */}
                    </View>
            </ScrollView>
            
            
        </View>
    );
}
export default JobScreen;