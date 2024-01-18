import { useCuMenu } from '../casos-de-uso/Menu';

export const useMenuControlador = () => {
    const cuMenu = useCuMenu();

    return {
        obtenerMenusBottomNav: cuMenu.obtenerMenusBottomNav,
        obtenerMenusDrawer: cuMenu.obtenerMenusDrawer,
    };
};
