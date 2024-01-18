import {EntidadUsuario} from '../../entidad/autenticacion/ENT_Usuario';
import {HttpProxyModel, HttpResponse} from '../../objeto/OBJ_HttpProxy';
import {OBJLinea} from '../../objeto/autenticacion/OBJ_Linea';
import {ObjSessionUsuario} from '../../objeto/autenticacion/OBJ_SesionUsuario';
import {UsuarioStoreProxy} from '../../objeto/stores/UsuarioStoreProxy';
import {OBJ_Utils} from '../../objeto/OBJ_Utils';
import {CryptoObj} from "../../objeto/OBJ_CryptoJS";

export interface ModeloUsuario {
    isLogged: boolean;
    usuario: EntidadUsuario;
    session: ObjSessionUsuario;
    lineas: Array<OBJLinea>;
    lineaEnContexto: OBJLinea;
}

export type TipoErrorLoginCajetin =
    | 'clave_bloqueada'
    | 'clave_incorrecta'
    | 'no_registrado'
    | 'cambio_pass';

export interface LoginCredencialesHttpBody {
    estado: {
        codigoEstado: string;
        glosaEstado: string;
        datos?: {
            datos: {
                act_token: string;
            };
        };
    };
}

export interface UserAuthorizeHttpBody {
    estado: {
        codigoEstado: string;
        glosaEstado: string;
        datos?: {
            code: string;
        };
    };
}

export interface ObtenerTokenLoginHttpBody {
    error: boolean;
    datos: {
        access_token: string;
        refresh_token: string;
        responseBknd: string;
    }
}

export interface CUUsuarioModel {
    datosUsuario?: ModeloUsuario;
    loginCajetin: (params: {
        _Http: HttpProxyModel;
        _Encriptador: CryptoObj;
        utils: OBJ_Utils;
        rut: string;
        password: string;
    }) => Promise<HttpResponse<string, TipoErrorLoginCajetin>>;
    userAuthorize: (params: {
        _Http: HttpProxyModel;
        act_token: string;
        time: boolean;
    }) => Promise<HttpResponse<string>>;
    loginInvitado: (params: {
        _Http: HttpProxyModel;
        pin: string;
    }) => Promise<HttpResponse<string>>;
    obtenerTokenLogin: (params: {
        _Http: HttpProxyModel;
        code: string;
        time: boolean;
    }) => Promise<HttpResponse<ObtenerTokenLoginHttpBody['datos']>>
    login3Steps: (params: {
        _Http: HttpProxyModel;
        _Encriptador: CryptoObj;
        utils: OBJ_Utils;
        rut: string;
        password: string;
    }) => Promise<HttpResponse<ObtenerTokenLoginHttpBody['datos']>>;
    guardarUsuarioPersistencia: (params: {
        store: UsuarioStoreProxy;
        usuario: Partial<ModeloUsuario>;
    }) => Partial<ModeloUsuario>;
    obtenerUsuarioPersistencia: (params: {
        store: UsuarioStoreProxy;
    }) => Partial<ModeloUsuario> | null;
    obtenerSesion: (params: {
        store: UsuarioStoreProxy;
    }) => ModeloUsuario['session'] | null;
    obtenerLineasUsuario: (params: {
        store: UsuarioStoreProxy;
    }) => ModeloUsuario['lineas'] | null;
    obtenerLineaEnContexto: (params: {
        store: UsuarioStoreProxy;
    }) => ModeloUsuario['lineaEnContexto'] | null;
}
