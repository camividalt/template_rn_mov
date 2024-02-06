import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { COLORS, WHITE } from '../../assets/styles/Colors';
import { ICONS } from '../../assets/Assets';
import { Label } from '../../componentes/label/Label';

const GoBack = ({ onPress }: { onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.container}>
                <Image source={ICONS.ARROW.goBack} />
                <Label
                    text='Volver'
                    font="regular"
                    color={COLORS(WHITE, 1)}
                    style={styles.back}>
                </Label>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    back: {
        paddingLeft: 8,
    },
});

export default GoBack;
