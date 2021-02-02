import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import RegisterScreen from "../screens/registerScreen" 
import LoginScreen from "../screens/loginScreen"
import LoadingScreen from '../screens/loadingScreen';


const Stack = createStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export { AuthStackNavigator }