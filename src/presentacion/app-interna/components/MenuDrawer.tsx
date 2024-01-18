import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image, View} from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import {BLUE, COLORS, WHITE} from '../../assets/styles/Colors';
import {MenuHeader} from './MenuHeader';
import MenuSection from './MenuSection';
import {ICONS} from '../../assets/Assets';
import {Label} from '../../components/Label/Label';
import {OBJMenuSection} from '../../../dominio/objeto/autenticacion/OBJ_MenuSection';
import {useMenuController} from '../../../aplicacion/controladores/MenuController';

interface MenuDrawerProps {
    logout: () => void;
}
export const MenuDrawer = (props: MenuDrawerProps) => {
    const [menus, setMenus] = useState<OBJMenuSection[]>([]);
    const {obtenerMenusDrawer} = useMenuController();

    useEffect(() => {
        obtenerMenusDrawer().then(res => {
            setMenus(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <MenuHeader />
            <ScrollView>
                <View style={{marginBottom: 20}}>
                    {menus.map((section, index) => (
                        <MenuSection key={index} section={section} />
                    ))}
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.singoffContainer}
                        onPress={() => props.logout()}>
                        <Image source={ICONS.signOff} style={styles.signOff} />
                        <Label
                            style={styles.singOffText}
                            text={'Cerrar Sesión'}
                            color={COLORS(WHITE, 1)}
                            font="regular"
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: COLORS(BLUE.MOVISTAR, 1),
    },
    legalsText: {
        marginTop: 30,
        paddingHorizontal: 20,
        lineHeight: 17,
    },
    versionText: {
        paddingVertical: 20,
    },
    singoffContainer: {
        height: 28,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    signOff: {
        width: 24,
        height: 24,
        alignSelf: 'flex-start',
        marginLeft: 22,
        marginRight: 13,
    },
    singOffText: {
        margin: 0,
        padding: 0,
    },
});
