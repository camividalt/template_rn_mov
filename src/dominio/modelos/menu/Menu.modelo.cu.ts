import { OBJMenuItem } from '../../objeto/autenticacion/MenuItem.objeto';
import { OBJMenuSection } from '../../objeto/autenticacion/MenuSection.objeto';

export interface MenuModeloCU {
    obtenerMenusBottomNav: () => Promise<OBJMenuItem[]>;
    obtenerMenusDrawer: () => Promise<OBJMenuSection[]>;
}
