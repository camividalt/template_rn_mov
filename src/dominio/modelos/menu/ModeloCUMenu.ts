import {OBJMenuItem} from '../../objeto/autenticacion/OBJ_MenuItem';
import {OBJMenuSection} from '../../objeto/autenticacion/OBJ_MenuSection';

export interface ModeloCUMenu {
    obtenerMenusBottomNav: () => Promise<OBJMenuItem[]>;
    obtenerMenusDrawer: () => Promise<OBJMenuSection[]>;
}
