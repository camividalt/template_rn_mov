import { ImageProps } from 'react-native';
import { AppInternaStack } from '../../../presentacion/root-navigation/RootNavigationTypes';

export interface OBJMenuItem {
    route: keyof AppInternaStack;
    icon: ImageProps['source'];
    description: string;
}
