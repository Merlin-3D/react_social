import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackNavigator } from '../navigation/AuthStackNavigator'
import BottomNavigationScene from '../navigation/bottomNavigationScene';
import PostScreen from '../screens/postScreen';
import CompleteProfilScreen from '../screens/completeProfileScreen';
import ProfileScreen from '../screens/profileScreen';
import VisitProfileScreen from '../screens/visitProfileScreen';
import HomeScreen from '../screens/homeScreen';
import PrivateInfos from '../screens/privateInfos';
import AboutMe from '../screens/aboutMe';
import FinalisedProjectScreen from '../screens/finalisedProjectScreen';
import Language from '../screens/language';
import SkillsScreen from '../screens/skillsScreen'
import AddExperienceScreen from '../screens/addExperienceScreen'
import AddFormationScreen from '../screens/addFormationScreen'
import SearchScreen from '../screens/searchScreen'




const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="auth" 
                component={AuthStackNavigator}
                options={{ headerShown: false }}/>
                
            <Stack.Screen
                name="navhome" 
                component={BottomNavigationScene}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name="profil" 
                component={ProfileScreen}
                options={{ headerShown: false, }}/>
                <Stack.Screen
                name="HomeScreen" 
                component={HomeScreen}/>

            <Stack.Screen
                name="completeProfil" 
                component={CompleteProfilScreen}
                options={{ headerShown: false }}/>
            <Stack.Screen 
                name="VisitProfileScreen" component={VisitProfileScreen}/>
            <Stack.Screen
                name="privateInfos" 
                component={PrivateInfos}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name="aboutMe" 
                component={AboutMe}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name="finProScreen" 
                component={FinalisedProjectScreen}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name="skillsScreen" 
                component={SkillsScreen}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name="language" 
                component={Language}
                options={{ headerShown: false }}/>
                <Stack.Screen name="addExperienceScreen" component={AddExperienceScreen}/>
                <Stack.Screen 
                    name="addFormationScreen" component={AddFormationScreen}/>
                <Stack.Screen name="search" 
                component={SearchScreen}
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator }