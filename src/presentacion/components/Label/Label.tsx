import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Telefonica from '../../assets/styles/TelefonicaFont';
import { COLORS, GRAY } from '../../assets/styles/Colors';

interface LabelProps {
    text?: string;
    size?: number;
    align?: string;
    font?: 'light' | 'extraLight' | 'regular' | 'regularItalic' | 'bold';
    color?: string;
    onPress?: () => void;
    style?: any;
    children?: any;
}

export const Label = (props: LabelProps) => {
    const { text, size, align, font, color, onPress, style, children } = props;
    let fontWeightStyle: {
        fontFamily: string
    };

    switch (font) {
        case 'light':
            fontWeightStyle = Telefonica.light;
            break;
        case 'extraLight':
            fontWeightStyle = Telefonica.extraLight;
            break;
        case 'regular':
            fontWeightStyle = Telefonica.regular;
            break;
        case 'regularItalic':
            fontWeightStyle = Telefonica.regularItalic;
            break;
        case 'bold':
            fontWeightStyle = Telefonica.bold;
            break;
        default:
            fontWeightStyle = Telefonica.light;
            break;
    };

    return (
        <Text style={[fontWeightStyle, style,
            size ? { fontSize: size } : { fontSize: 16 },
            align ? { textAlign: align } : { textAlign: 'center' },
            color ? { color: color } : { color: COLORS(GRAY[6], 1) }]}
        >
            {text}
            {children}
        </Text>
    );
};