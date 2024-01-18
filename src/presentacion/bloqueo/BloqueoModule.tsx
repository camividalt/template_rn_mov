import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { useLandingController } from '../../aplicacion/controladores/LandingController';

interface MisProps extends NativeStackScreenProps<any,any>{

}
export default ({navigation}:MisProps) => {

    return (
        <>
            <Text>Bloqueo de Dispositivo</Text>
        </>
    );
};
