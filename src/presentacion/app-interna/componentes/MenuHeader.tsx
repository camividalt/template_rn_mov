import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS, GRAY, WHITE } from '../../assets/styles/Colors';
import { Label } from '../../componentes/label/Label';

export const MenuHeader = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerComponent}>
                    <Label
                        text="Bienvenid@"
                        font="bold"
                        size={16}
                        color={COLORS(WHITE, 1)}
                        align="left"
                    />
                </View>
                {/* <View style={styles.containerComponent}>
                    <TouchableOpacity onPress={() => props.logout()}>
                        <Image
                            source={ICONS.signOff}
                            style={styles.signOff}
                        />
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS(GRAY[5], 1),
    },
    containerComponent: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: 15,
    },
    header: {
        paddingTop: 10,
        paddingHorizontal: '2%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    imgCard: {
        width: 48,
        height: 30,
        marginRight: 10,
    },
    link: {
        paddingVertical: 20,
        textDecorationColor: COLORS(GRAY[5], 1),
        textDecorationLine: 'underline',
    },
    signOff: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginRight: 20,
    },
});
