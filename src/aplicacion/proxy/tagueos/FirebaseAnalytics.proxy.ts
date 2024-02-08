//import analytics from '@react-native-firebase/analytics';

export const useMarcadorFirebaseAnalytics = () => {

    const inicializarFirebase = async (identificador: string) => {
        //await analytics().setUserId(identificador);
    }

    const tagearEvento = async (nombre: string) => {
        /*await analytics().logEvent(nombre, {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
        })*/
    }

    const tagearPantalla = async (nombre: string, clase: string) => {
        /*await analytics().logScreenView({
            screen_name: nombre,
            screen_class: clase,
        });*/
    }

    return {
        inicializarFirebase,
        tagearEvento,
        tagearPantalla
    }
};
