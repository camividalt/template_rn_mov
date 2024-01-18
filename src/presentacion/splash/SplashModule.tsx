import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLandingControlador } from '../../aplicacion/controladores/Landing.controlador';
import { RootNavigationTypes } from '../root-navigation/RootNavigationTypes';

interface MisProps extends NativeStackScreenProps<RootNavigationTypes> { }
export default ({ navigation }: MisProps) => {
    useEffect(() => {
        const landingControler = useLandingControlador();
        landingControler.dispositivoValido().then(resp => {
            if (resp) {
                setTimeout(() => {
                    navigation.replace('AppInterna', { screen: 'Home' });
                }, 2000);
            } else {
                setTimeout(() => {
                    navigation.replace('Bloqueo');
                }, 2000);
            }
        });
    }, [navigation]);
    return (
        <>
            <Text>Splash</Text>
        </>
    );
};
