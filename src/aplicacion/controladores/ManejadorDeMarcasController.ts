import {useUsuarioStore} from '../proxy/stores/usuarioZustandStore.proxy';
import {useMarcadorFirebaseAnalytics} from "../proxy/tagueos/firebaseAnalytics.proxy";

export const useManejoadorDeMarcasController = () => {

    const usuarioStore = useUsuarioStore();
    const firebaseAnalytics = useMarcadorFirebaseAnalytics();

    const inicializar = () => {
        const usuario  = usuarioStore.obtenerUsuario()
        if(usuario)
            firebaseAnalytics.inicializarFirebase(usuario?.rut);
    }

    const actualizar = () => {}
    const marcarPantalla = () => {
        firebaseAnalytics.tagearPantalla("pantalla","clase");
    }

    const marcarEvento = () => {
        firebaseAnalytics.tagearEvento("nombre");
    }

    return {
        inicializar,
        actualizar,
        marcarPantalla,
        marcarEvento,
    };
};
