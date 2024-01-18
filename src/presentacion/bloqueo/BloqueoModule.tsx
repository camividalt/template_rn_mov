import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLandingControlador } from '../../aplicacion/controladores/Landing.controlador';

interface MisProps extends NativeStackScreenProps<any, any> {

}
export default ({ navigation }: MisProps) => {

    return (
        <>
            <Text>Bloqueo de Dispositivo</Text>
        </>
    );
};
