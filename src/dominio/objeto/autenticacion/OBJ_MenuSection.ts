import {OBJMenuItem} from './OBJ_MenuItem';

export interface OBJMenuSection {
    type: 'section';
    title: 'Menú';
    items: OBJMenuItem[];
}
