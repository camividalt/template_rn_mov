import React, { useState } from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {BLUE, COLORS, GRAY, WHITE} from '../../assets/styles/Colors';
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
    View,
} from 'react-native';
import Telefonica from '../../assets/styles/TelefonicaFont';

export interface InputMovistarProps {
    size?: 'small' | 'medium' | 'large';
    left?: React.ReactNode;
    right?: React.ReactNode;
    label?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    maxlength?: number;
    autoFocus?: boolean;
    tipoMensaje?: 'error' | 'info';
    tipo?: 'normal' | 'number' | 'password';
    keyboardType?: KeyboardTypeOptions;
    textChange: (text: string) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
export const InputMovistar = (props: InputMovistarProps) => {
    if (!props.size) {
        props.size = 'medium';
    }
    const textChange = (text: string) => {
        let finalText = text;
        if (props.tipo === 'number') {
            finalText = text.replace(/[^0-9]/g, '');
        }
        props.textChange(finalText);
    };

    return (
        <View style={styles.contenedor}>
            <TextInput
                outlineColor={COLORS(GRAY[3], 1)}
                placeholderTextColor={COLORS(GRAY[3], 1)}
                activeOutlineColor={COLORS(BLUE.MOVISTAR, 1)}
                left={props.left}
                label={props.label}
                mode="outlined"
                error={Boolean(props.error)}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={props.maxlength}
                autoFocus={props.autoFocus}
                onChangeText={textChange}
                keyboardType={props.keyboardType}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                secureTextEntry={props.tipo === 'password'}
                style={styles.input}
                selectionColor={COLORS(BLUE.MOVISTAR, 1)}
                textColor={COLORS(GRAY[6], 1)}
            />
            {props.tipoMensaje ? (
                <HelperText
                    style={styles.textError}
                    type={props.tipoMensaje}
                    visible={Boolean(props.error)}>
                    Debes ingresar 8 caracteres
                </HelperText>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        paddingVertical: 5,
        width: '100%',
    },
    greeting: {
        color: COLORS(WHITE, 1),
        fontFamily: Telefonica.regular.fontFamily,
        fontSize: 16,
        marginVertical: 15,
        marginLeft: 10,
    },
    textError: {
        textAlign: 'right',
    },
    input: {
        width: '100%',
        fontSize: 14,
    },
});
