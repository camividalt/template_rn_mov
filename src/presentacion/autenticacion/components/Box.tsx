/* -------------- Libraries - React ------------- */
import React from 'react';
/* ------------ Container Components ------------ */
import {COLORS, GRAY, WHITE} from '../../assets/styles/Colors';
import {View, Text, StyleSheet} from 'react-native';
/* -----------   Utilities - Global   ----------- */

const Box = ({children, titulo}: React.PropsWithChildren<{titulo: string}>) => {
    return (
        <View>
            <View style={style.main}>
                <View style={style.contenedorTitulo}>
                    <Text style={style.titulo}>
                        {titulo}
                    </Text>
                </View>
                <View style={style.contenedor}>
                    {children}
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    main: {
        marginTop: 24,
        marginHorizontal: 20,
        paddingVertical: '5%',
    },
    contenedorTitulo: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: COLORS(GRAY[1], 1),
    },
    titulo: {
        fontSize: 16,
        color: COLORS(GRAY[6], 1),
        textAlign: 'center',
        paddingVertical: 18,
    },
    contenedor: {
        backgroundColor: COLORS(WHITE, 1),
        fontSize: 16,
        color: COLORS(GRAY[6], 1),
        textAlign: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 16,
        alignItems: 'center',
        shadowColor: COLORS(GRAY[6], 1)
    }
})

export default Box;
