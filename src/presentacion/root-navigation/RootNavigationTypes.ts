import { NavigatorScreenParams } from '@react-navigation/native';

export type RootNavigationTypes = {
    AppAbierta: NavigatorScreenParams<AppAbiertaStack>;
    Autenticacion: NavigatorScreenParams<AutenticacionStack>;
    AppInterna: NavigatorScreenParams<AppInternaStack>;
    Splash: undefined;
    Bloqueo: undefined;
};

export type AppAbiertaStack = {
    [nombre: string]: undefined;
};

export type AutenticacionStack = {
    Login: undefined;
    LoginSMS: undefined;
    RegistroBienvenida: undefined;
    RegistroPaso1: undefined;
    RegistroPaso2: undefined;
    RegistroPaso3: undefined;
    RegistroPaso4: undefined;
};

export type AppInternaDrawerStack = {
    MainTabNavigator: undefined;
};

export type AppInternaStack = {
    Home: undefined;
    Tienda: undefined;
    Club: undefined;
    Perfil: undefined;
    MenuMas: undefined;
};
