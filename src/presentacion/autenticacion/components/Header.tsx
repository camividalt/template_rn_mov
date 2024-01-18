/* -------------- Libraries - React ------------- */
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
/* -----------   Utilities - Global   ----------- */
import {ICONS} from '../../assets/Assets';
import GoBack from './GoBack';

const Header = ({goBack}: {goBack: () => void}) => {
    return (
        <>
            <View style={{flex: 1}}>
                <LinearGradient
                    colors={['#019AF1', '#0178E6']}
                    style={styles.gradient}
                />
            </View>
            <GoBack onPress={() => goBack()} />
            <View style={styles.logo}>
                <Image
                    source={ICONS.LOGO.whiteCompany}
                    style={styles.logoWhiteCompany}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    gradient: {
        ...StyleSheet.absoluteFillObject,
        height: 208,
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        paddingLeft: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 16,
    },
    logoWhiteCompany: {
        height: 67,
        width: 67,
    },
});

export default Header;
