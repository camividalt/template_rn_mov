import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MisProps extends NativeStackScreenProps<any, any> { }
export default ({ navigation }: MisProps) => {
    const navegarA = (ruta: string) => {
        navigation.navigate(ruta);
    };
    return (
        <>
            <Text>APP ABIERTA</Text>
            <TouchableOpacity
                onPress={() => {
                    navegarA('Autenticacion');
                }}>
                <Button title="ir A Login" />
            </TouchableOpacity>
        </>
    );
};
