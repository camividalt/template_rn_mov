import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MenuDrawer } from './componentes/MenuDrawer';
import { TabsNavigatorAppInterna } from './views/tabs/TabsNavigatorAppInterna';
import { AppInternaDrawerStack } from '../root-navigation/RootNavigationTypes';

const Drawer = createDrawerNavigator<AppInternaDrawerStack>();

export default () => {
    return (
        <Drawer.Navigator
            id="appInternaDrawer"
            drawerContent={() => <MenuDrawer logout={() => { }} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerPosition: 'right',
                swipeEnabled: false,
                drawerStyle: { width: '80%' },
                overlayColor: 'transparent',
            }}>
            <Drawer.Screen
                name="MainTabNavigator"
                component={TabsNavigatorAppInterna}
            />
        </Drawer.Navigator>
    );
};
