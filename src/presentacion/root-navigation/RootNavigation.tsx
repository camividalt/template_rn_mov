import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigationTypes } from './RootNavigationTypes';
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import AppAbiertaModule from '../app-abierta/AppAbiertaModule';
import AutenticacionModule from '../autenticacion/AutenticacionModule';
import AppInternaModule from '../app-interna/AppInternaModule';
import SplashModule from '../splash/SplashModule';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator<RootNavigationTypes>();

export const RootNavigation = () => {
    const navRef = useNavigationContainerRef<RootNavigationTypes>();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer ref={navRef}>
                <RootStack.Navigator initialRouteName="Splash">
                    <RootStack.Screen
                        name="Splash"
                        component={SplashModule}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="Bloqueo"
                        component={SplashModule}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="AppAbierta"
                        component={AppAbiertaModule}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="Autenticacion"
                        component={AutenticacionModule}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="AppInterna"
                        component={AppInternaModule}
                        options={{ headerShown: false }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
