import React from 'react';
import {AutenticacionStack} from '../root-navigation/RootNavigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';

export default ({}) => {
    const RootStack = createNativeStackNavigator<AutenticacionStack>();
    return (
        <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
        </RootStack.Navigator>
    );
};
