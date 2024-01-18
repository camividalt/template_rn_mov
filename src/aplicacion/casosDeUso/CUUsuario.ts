import {
    ModeloUsuario,
    CUUsuarioModel,
    TipoErrorLoginCajetin,
    LoginCredencialesHttpBody,
    UserAuthorizeHttpBody,
    ObtenerTokenLoginHttpBody,
} from '../../dominio/modelos/autenticacion/Modelo_Usuario';

import {HttpError, HttpProxyModel, HttpResponse} from '../../dominio/objeto/OBJ_HttpProxy';

export const CUUsuario = (): CUUsuarioModel => {

    const controlarTipoErrorLoginCajetin = (
        respuestaError: string | undefined,
    ): TipoErrorLoginCajetin => {
        const errorLimpio = respuestaError?.toLowerCase() || '';
        const errores: {[index: string]: TipoErrorLoginCajetin} = {
            'clave bloqueada': 'clave_bloqueada',
            'error, clave incorrecta': 'clave_incorrecta',
            'usuario no registrado': 'no_registrado',
            'redireccionamiento a cambio de pass': 'cambio_pass',
        };

        return errores[errorLimpio] || errorLimpio;
    };

    const loginCajetin: CUUsuarioModel['loginCajetin'] = async params => {
        return new Promise(resolve => {
            const claveFormateada = encodeURIComponent(params.password);
            const rutFormateado = encodeURIComponent(params.utils.formatearRut(params.rut, false));
            const claveEncriptada = params._Encriptador.encriptar(claveFormateada,'4pp12m0v1st4rCHILE:1574863812000',"");
            const rutEncriptado = params._Encriptador.encriptar(rutFormateado,'4pp12m0v1st4rCHILE:1574863812000',"");
            params._Http
                .post<{
                    estado: {
                        codigoEstado: string;
                        glosaEstado: string;
                        datos?: {
                            datos: {
                                act_token: string;
                            };
                        };
                    };
                }>({
                    path: '/login-app/v2/loginCajetin',
                    body: {
                        username: rutEncriptado,
                        password: claveEncriptada,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    params: {
                        apikey: '53c081ef-ab4b-47b0-95b4-892b2ac7d5f0',
                    },
                })
                .then(res => {
                    // LOGICA DE VALIDAR DATOS (Anti corruption layer)
                    if (
                        !res.error &&
                        res.response?.estado?.datos?.datos?.act_token
                    ) {
                        return resolve({
                            error: false,
                            response:
                                res.response.estado.datos.datos.act_token,
                        });
                    }
                    return resolve({
                        error: true,
                        msg: res.response?.estado?.glosaEstado,
                        tipo: controlarTipoErrorLoginCajetin(
                            res.response?.estado?.glosaEstado,
                        ),
                    });
                })
                .catch((error: HttpError) => {
                    return resolve({
                        error: true,
                        tipo: controlarTipoErrorLoginCajetin(
                            error.response?.estado?.glosaEstado,
                        ),
                        msg: error.response?.estado?.glosaEstado,
                    });
                });
        });
    }

    const userAuthorize: CUUsuarioModel['userAuthorize'] = async params => {
        return new Promise(resolve => {
            params._Http
                .post<{
                    estado: {
                        codigoEstado: string;
                        glosaEstado: string;
                        datos?: {
                            code: string;
                        };
                    };
                }>({
                    path: '/login-app/v2/loginCajetin',
                    body: {
                        act_token: params.act_token,
                        response_type: 'code',
                        api_key: '53c081ef-ab4b-47b0-95b4-892b2ac7d5f0',
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then(res => {
                    // LOGICA DE VALIDAR DATOS (Anti corruption layer)
                    console.log('[userAuthorize]RES LOGIN', res);
                    if (!res.error && res.response?.estado?.datos?.code) {
                        return resolve({
                            error: false,
                            response: res.response.estado.datos.code,
                        });
                    }
                    return resolve({
                        error: true,
                        msg: res.response?.estado?.glosaEstado,
                        tipo: res.response?.estado?.glosaEstado,
                    });
                })
                .catch(error => {
                    return resolve({
                        error: true,
                        tipo: error.message,
                        msg: error.response?.estado?.glosaEstado,
                    });
                });
        });
    }

    const loginInvitado: CUUsuarioModel['loginInvitado'] = params => {
        return new Promise((resolve, reject) => {
            params._Http
                .post<ModeloUsuario>({
                    path: '/login-invitado',
                    body: {
                        pin: params.pin,
                    },
                })
                .then(res => {
                    // LOGICA DE VALIDAR DATOS (Anti corruption layer)
                    if (res.response) {
                        return resolve({
                            error: false,
                            response: '',
                        });
                    }
                    return resolve({
                        error: true
                    });
                })
                .catch(error => {
                    // LOGICA DE MANEJO DE ERROR
                    return resolve({
                        error: true
                    });
                });
        });
    }

    const login3Steps: CUUsuarioModel['login3Steps'] = async params => {
        // let respuesta: Awaited<ReturnType<CUUsuarioModel['login3Steps']>> = {
        //     error: false,
        // };
        const loginCajetinResponse = await loginCajetin({
            _Http: params._Http,
            _Encriptador: params._Encriptador,
            utils: params.utils,
            rut: params.rut,
            password: params.password
        })
        if (loginCajetinResponse.error || !loginCajetinResponse.response) {
            return Promise.resolve({
                error: true,
                msg: loginCajetinResponse.msg,
                tipo: loginCajetinResponse.tipo
            })
        }

        const userAuthorizeResponse = await userAuthorize({
            _Http: params._Http,
            act_token: loginCajetinResponse.response,
            time: false
        })
        if (userAuthorizeResponse.error || !userAuthorizeResponse.response) {
            return Promise.resolve({
                error: true,
                msg: userAuthorizeResponse.msg,
                tipo: userAuthorizeResponse.tipo
            })
        }

        const tokenResponse = obtenerTokenLogin({
            _Http: params._Http,
            code: userAuthorizeResponse.response,
            time: false
        })

        return Promise.resolve(tokenResponse)
    }

    const obtenerTokenLogin: CUUsuarioModel['obtenerTokenLogin'] = params => {
        return new Promise((resolve) => {
            let clientSecret = "";
            let clientID = "";
            if (params.time) {
                clientSecret = "b35328c4-d15b-46e7-b539-57068cc1bd29";
                clientID = "598d51c9-a4c1-40e8-8583-7ee4a3f16abe";
            } else {
                clientSecret = "TU3uShAlt24lESNL";
                clientID = "53c081ef-ab4b-47b0-95b4-892b2ac7d5f0";
            } 

            params._Http.post<ObtenerTokenLoginHttpBody>({
                path: '/token',
                body: {
                    client_id: clientID,
                    client_secret: clientSecret,
                    code: params.code,
                    redirect_uri: 'https://myloginOauth.net/auth-code',
                    grant_type: 'authorization_code'
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then((response) => {
                if (!response.error) {
                    return resolve({
                        error: false,
                        response: response.response?.datos
                    })
                }
                return resolve({
                    error: true,
                    msg: 'Fallo api Token',
                    tipo: 'Fallo api Token'
                });
            })
        })
    }

    return {
        loginCajetin,
        userAuthorize: userAuthorize,
        loginInvitado,
        login3Steps,
        obtenerTokenLogin,
        guardarUsuarioPersistencia: params => {
            // USO DE STORE (PROXY) PARA GUARDAR DATA
            params.store.establecerDatos(params.usuario);
            return params.usuario;
        },
        obtenerUsuarioPersistencia: params => {
            // USO DE STORE (PROXY) PARA OBTENER DATA
            const datos = params.store.obtenerDatos();
            return datos;
        },
        obtenerSesion: params => {
            // USO DE STORE (PROXY) PARA OBTENER DATA
            const datos = params.store.obtenerSesion();
            return datos;
        },
        obtenerLineasUsuario: params => {
            // USO DE STORE (PROXY) PARA OBTENER DATA
            const datos = params.store.obtenerLineas();
            return datos;
        },
        obtenerLineaEnContexto: params => {
            // USO DE STORE (PROXY) PARA OBTENER DATA
            const datos = params.store.obtenerLineaEnContexto();
            return datos;
        },
    };
};
