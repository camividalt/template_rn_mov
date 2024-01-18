import React, {PropsWithChildren} from 'react';
import {Button, ButtonProps} from 'react-native-paper';
import {BLUE, COLORS, RED, WHITE} from '../../assets/styles/Colors';
import { Label } from '../Label/Label';

interface BotonMovistarProps extends ButtonProps {
    type?: 'primary' | 'link' | 'danger';
    style?: any;
    block?: boolean;
}

const defaultProps: BotonMovistarProps = {
    type: 'primary',
    children: null
};

export const BotonMovistar = (
    props: PropsWithChildren<BotonMovistarProps> = {type: 'primary', children: null},
) => {
    const {type} = {...defaultProps, ...props};
    const backgroundColor = () => {
        if (type === 'primary') {
            return COLORS(BLUE.MOVISTAR, 1);
        }
        if (type === 'link') {
            return COLORS(WHITE, 1);
        }
        if (type === 'danger') {
            return COLORS(RED, 1);
        }
    };
    const textColor = () => {
        if (type === 'primary') {
            return COLORS(WHITE, 1);
        }
        if (type === 'link') {
            return COLORS(BLUE.MOVISTAR, 1);
        }
        if (type === 'danger') {
            return COLORS(WHITE, 1);
        }
    };
    const borderColor = () => {
        if (type === 'link') {
            return COLORS(BLUE.MOVISTAR, 1);
        }
    };
    return (
        <Button
            {...props}
            style={{
                backgroundColor: backgroundColor(),
                borderColor: borderColor(),
                borderRadius: 30,
                width: props.block ? '100%' : 'auto',
                ...props.style
            }}>
            <Label color={textColor()}>{props.children}</Label>
        </Button>
    );
};
