import { EntidadUsuario } from '../../entidad/autenticacion/Usuario.entidad';
import { HttpProxyModel, HttpResponse } from '../../objeto/Http.proxy.objeto';
import { OBJLinea } from '../../objeto/autenticacion/Linea.objeto';
import { ObjSesionUsuario } from '../../objeto/autenticacion/SesionUsuario.objeto';
import { UsuarioStoreProxy } from '../../objeto/stores/Usuario.store.proxy';
import { OBJ_Utils } from '../../objeto/Utils.objeto';
import { CryptoObj } from "../../objeto/CryptoJS.objeto";

export interface ModeloUsuario {
    isLogged: boolean;
    usuario: EntidadUsuario;
    session: ObjSesionUsuario;
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