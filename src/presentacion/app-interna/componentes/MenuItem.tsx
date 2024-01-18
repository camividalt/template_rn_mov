/* -------------- Libraries - React ------------- */
import React, { memo } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Label } from '../../componentes/label/Label';
import { COLORS, WHITE } from '../../assets/styles/Colors';
import { AppInternaStack } from '../../root-navigation/RootNavigationTypes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { OBJMenuItem } from '../../../dominio/objeto/autenticacion/MenuItem.objeto';

interface MenuItemProps {
    item: OBJMenuItem;
}
const MenuItem = ({ item }: MenuItemProps) => {
    const navigation = useNavigation<NavigationProp<AppInternaStack>>();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(item.route)}
            style={styles.container}>
            <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
            />
            <Label
                text={item.description}
                color={COLORS(WHITE, 1)}
                font="regular"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
});

export default memo(MenuItem);
