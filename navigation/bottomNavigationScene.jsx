import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import PostScreen from '../screens/postScreen';
import NotificationScreen from '../screens/notificationScreen';
import JobScreen from '../screens/jobScreen';

const HomeScene = () => <View style={styles.container}><HomeScreen/></View>;
const PostScene = () => <View ><PostScreen/></View>;
const ProfileScene = () => <View ><ProfileScreen/></View>;
const notificationScene = () => <View ><NotificationScreen/></View>;
const JobScene = () => <View ><JobScreen/></View>



const BottomNavigationScene = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'home', icon: 'home', title: 'Accueil'},
        { key: 'job', icon: 'briefcase-variant', title: 'Emploi'},//briedcase//briefcase-variant
        { key: 'publication', icon: 'plus-circle', title: 'Post'},
        { key: 'notification', icon: 'bell', title: 'Notifications'},
        { key: 'user', icon: 'account', title: 'Profil'},
      //{ key: 'user', title: 'Profil', icon: 'account' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
        home: HomeScene,
        job: JobScene,
        publication: PostScene,
        user: ProfileScene,
        notification: notificationScene
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#393939"
        inactiveColor="#696969"
        barStyle = {{backgroundColor: "#fff",}}/>
    );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
         // justifyContent: "center",
         
         alignItems: "center",
      }
    });

  
  export default BottomNavigationScene;
