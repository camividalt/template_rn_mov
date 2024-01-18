import { MenuModeloCU } from '../../dominio/modelos/menu/Menu.modelo.cu';
import { ICONS } from '../../presentacion/assets/Assets';

export const useCuMenu = (): MenuModeloCU => {
    return {
        obtenerMenusBottomNav: () => {
            return new Promise(resolve => {
                return resolve([
                    {
                        description: 'Tienda',
                        icon: ICONS.alert,
                        route: 'Tienda',
                    },
                    {
                        description: 'Inicio',
                        icon: ICONS.alert,
                        route: 'Home',
                    },
                    {
                        description: 'Club',
                        icon: ICONS.alert,
                        route: 'Club',
                    },
                    {
                        description: 'Más',
                        icon: ICONS.alert,
                        route: 'MenuMas',
                    },
                ]);
            });
        },
        obtenerMenusDrawer: () => {
            return new Promise(resolve => {
                return resolve([
                    {
                        type: 'section',
                        title: 'Menú',
                        items: [
                            {
                                description: 'Home',
                                icon: ICONS.alert,
                                route: 'Home',
                            },
                            {
                                description: 'Tienda',
                                icon: ICONS.alert,
                                route: 'Tienda',
                            },
                            {
                                description: 'Club',
                                icon: ICONS.alert,
                                route: 'Club',
                            },
                            {
                                description: 'Perfil',
                                icon: ICONS.alert,
                                route: 'Perfil',
                            },
                        ],
                    },
                ]);
            });
        },
    };
};
