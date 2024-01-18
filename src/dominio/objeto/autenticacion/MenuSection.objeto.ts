import { OBJMenuItem } from './MenuItem.objeto';

export interface OBJMenuSection {
    type: 'section';
    title: 'Menú';
    items: OBJMenuItem[];
}
