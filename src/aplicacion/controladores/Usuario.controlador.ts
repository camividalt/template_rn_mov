import { ModeloUsuario } from '../../dominio/modelos/autenticacion/Usuario.modelo';
import { API_USUARIO_URL } from '../../dominio/entidad/autenticacion/Usuario.entidad';
import { CUUsuario } from '../casos-de-uso/Usuario';
import { useHttpProxy } from '../proxy/http/Http.proxy';
import { useUsuarioStore } from '../proxy/stores/UsuarioRedux.store.proxy';
import { UtilsService } from '../proxy/utiles/UtilsService';
import { useCryptoJS } from '../proxy/encriptacion/CryptoJS.proxy';

export const useUsuarioControlador = () => {
    const cuUsuario = CUUsuario();
    const httpProxy = useHttpProxy(API_USUARIO_URL);
    const cryptoProxy = useCryptoJS();
    const usuarioStore = useUsuarioStore();
    const login3Steps = (rut: string, password: string) => {
        return cuUsuario.login3Steps({
            _Http: httpProxy,
            _Encriptador: cryptoProxy,
            utils: UtilsService,
            rut,
            password,
        });
    };
    const loginPin = (pin: string) => {
        return cuUsuario.loginInvitado({
            _Http: httpProxy,
            pin,
        });
    };
    const obtenerUsuarioPersistencia = () => {
        return cuUsuario.obtenerUsuarioPersistencia({ store: usuarioStore });
    };
    const guardarUsuarioPersistencia = (usuario: Partial<ModeloUsuario>) => {
        return cuUsuario.guardarUsuarioPersistencia({
            store: usuarioStore,
            usuario,
        });
    };
    const obtenerSesion = () => {
        return cuUsuario.obtenerSesion({
            store: usuarioStore,
        });
    };
    const obtenerLineasUsuario = () => {
        return cuUsuario.obtenerLineasUsuario({
            store: usuarioStore,
        });
    };
    const obtenerLineaEnContexto = () => {
        return cuUsuario.obtenerLineaEnContexto({
            store: usuarioStore,
        });
    };

    return {
        login3Steps,
        loginPin,
        obtenerUsuarioPersistencia,
        guardarUsuarioPersistencia,
        obtenerSesion,
        obtenerLineasUsuario,
        obtenerLineaEnContexto,
    };
};
