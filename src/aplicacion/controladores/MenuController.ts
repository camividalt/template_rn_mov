import {useCuMenu} from '../casosDeUso/CUMenu';

export const useMenuController = () => {
    const cuMenu = useCuMenu();

    return {
        obtenerMenusBottomNav: cuMenu.obtenerMenusBottomNav,
        obtenerMenusDrawer: cuMenu.obtenerMenusDrawer,
    };
};
