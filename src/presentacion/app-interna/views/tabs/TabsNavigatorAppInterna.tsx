import React from 'react';
import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {OBJMenuItem} from '../../../../dominio/objeto/autenticacion/OBJ_MenuItem';
import {useEffect, useState} from 'react';
import {useMenuController} from '../../../../aplicacion/controladores/MenuController';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLUE, COLORS, GRAY, WHITE} from '../../../assets/styles/Colors';
import {Tienda} from '../tienda/Tienda';
import {Home} from '../home/Home';
import {Club} from '../club/Club';
import {Perfil} from '../perfil/perfil';
import {DrawerActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

interface RenderTabBarProps extends BottomTabBarProps {}

const RenderTabBar = ({state, navigation}: RenderTabBarProps) => {
    const [menus, setMenus] = useState<OBJMenuItem[]>([]);
    const {obtenerMenusBottomNav} = useMenuController();

    useEffect(() => {
        obtenerMenusBottomNav().then(res => {
            console.log('MENUS', res);
            setMenus(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.mainView}>
            {state.routes
                .filter(x => menus.find(y => y.route === x.name))
                .map((route, index) => {
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            if (route.name !== 'MenuMas') {
                                navigation.navigate(route.name);
                            } else {
                                navigation.dispatch(DrawerActions.openDrawer());
                            }
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const menuItem = menus.find(x => x.route === route.name);

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? {selected: true} : {}
                            }
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.menuItem}
                            key={route.key}>
                            <Image source={menuItem?.icon} />
                            <Text
                                style={{
                                    color: isFocused
                                        ? COLORS(BLUE.MOVISTAR, 1)
                                        : COLORS(GRAY[4], 1),
                                }}>
                                {menuItem?.description}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
        </View>
    );
};

export const TabsNavigatorAppInterna = () => {
    const MenuMasComponent = () => null;
    return (
        <Tab.Navigator
            tabBar={props => <RenderTabBar {...props} />}
            initialRouteName="Home"
            backBehavior="history">
            <Tab.Screen name="Tienda" component={Tienda} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Club" component={Club} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="MenuMas" component={MenuMasComponent} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        backgroundColor: COLORS(WHITE, 1),
        paddingVertical: 6,
    },
    menuItem: {flex: 1, alignItems: 'center'},
});
