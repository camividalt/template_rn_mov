/* -------------- Libraries - React ------------- */
import React from 'react';
import {StyleSheet, View} from 'react-native';
/* -------------- Global Components ------------- */
/* -----------   Utilities - Styles   ----------- */
import {Text} from 'react-native';
import {COLORS, GRAY} from '../../../utilities/styles/Colors';
import { Label } from '../../components/Label/Label';

const Greeting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Label
                    text='¡Hola! Qué alegría verte por acá'
                    size={16}
                    color={COLORS(GRAY[6], 1)}
                    style={styles.text}>
                </Label>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS(GRAY[1], 1),
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    text: {
        paddingRight: 8,
    },
});

export default Greeting;
