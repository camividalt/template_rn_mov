import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useLandingController} from '../../aplicacion/controladores/LandingController';
import {RootNavigationTypes} from '../root-navigation/RootNavigationTypes';

interface MisProps extends NativeStackScreenProps<RootNavigationTypes> {}
export default ({navigation}: MisProps) => {
    useEffect(() => {
        const landingControler = useLandingController();
        landingControler.dispositivoValido().then(resp => {
            if (resp) {
                setTimeout(() => {
                    console.log('Salto a los 2 segundos');
                    navigation.replace('AppInterna', {screen: 'Home'});
                }, 2000);
            } else {
                setTimeout(() => {
                    console.log('EL dispositivo no esta autorizado');
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
