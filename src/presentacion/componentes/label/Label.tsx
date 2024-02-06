import React from 'react';
import { Text } from 'react-native';
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
    let fontWeightStyle: {
        fontFamily: string
    };

    switch (props.font) {
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
        <Text style={[fontWeightStyle, props.style,
            props.size ? { fontSize: props.size } : { fontSize: 16 },
            props.align ? { textAlign: props.align } : { textAlign: 'center' },
            props.color ? { color: props.color } : { color: COLORS(GRAY[6], 1) }]}
        >
            {props.text}
            {props.children}
        </Text>
    );
};