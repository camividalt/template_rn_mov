import { useUsuarioStore } from '../proxy/stores/UsuarioZustand.store.proxy';
import { useMarcadorFirebaseAnalytics } from "../proxy/tagueos/FirebaseAnalytics.proxy";

export const useManejadorDeMarcasControlador = () => {

    const usuarioStore = useUsuarioStore();
    const firebaseAnalytics = useMarcadorFirebaseAnalytics();

    const inicializar = () => {
        const usuario = usuarioStore.obtenerUsuario()
        if (usuario)
            firebaseAnalytics.inicializarFirebase(usuario?.rut);
    }

    const actualizar = () => { }
    const marcarPantalla = () => {
        firebaseAnalytics.tagearPantalla("pantalla", "clase");
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
