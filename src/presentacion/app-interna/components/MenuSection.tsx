/* -------------- Libraries - React ------------- */
import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
/* ------------ Container Components ------------ */
import {COLORS, GRAY} from '../../assets/styles/Colors';
import type {OBJMenuItem} from '../../../dominio/objeto/autenticacion/OBJ_MenuItem';
import MenuItem from './MenuItem';
/* ------------------ Utilities ----------------- */

const MenuSection = ({section}: {section: {items: OBJMenuItem[]}}) => {
    return (
        <View style={styles.section}>
            {section.items.map((item: any, index: any) => (
                <MenuItem key={index} item={item} />
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        marginVertical: 8,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderBottomColor: COLORS(GRAY[5], 1),
        borderBottomWidth: 1,
    },
});

export default memo(MenuSection);
