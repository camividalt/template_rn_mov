import axios, { AxiosError } from 'axios';
import {
    HttpParams,
    HttpParamsBody,
    HttpProxyModel,
    HttpResponse,
} from '../../../dominio/objeto/OBJ_HttpProxy';

export const useHttpProxy = (baseUrl: string): HttpProxyModel => {
    const instancia = axios.create({
        baseURL: baseUrl,
    });

    const get = async <T>(params: HttpParams): Promise<HttpResponse<T>> => {
        return new Promise(resolve => {
            instancia
                .get<T>(params.path, {
                    headers: params.headers,
                    params: params.params,
                })
                .then(res => {
                    if (res?.data) {
                        return resolve({
                            error: false,
                            response: res.data,
                        });
                    }
                    return resolve(
                        controlarErrorHttp(new AxiosError('Respuesta vacía')),
                    );
                })
                .catch(error => {
                    return resolve(controlarErrorHttp(error));
                });
        });
    };

    const post = async <T>(
        params: HttpParamsBody,
    ): Promise<HttpResponse<T>> => {
        return new Promise(resolve => {
            instancia
                .post<T>(params.path, params.body, {
                    headers: params.headers,
                    params: params.params,
                })
                .then(res => {
                    console.log('[LOGIN]post', res);
                    if (res?.data) {
                        return resolve({
                            error: false,
                            response: res.data,
                        });
                    }
                    return resolve(
                        controlarErrorHttp(new AxiosError('Respuesta vacía')),
                    );
                })
                .catch(error => {
                    console.log('[LOGIN]catch post', error);
                    return resolve(controlarErrorHttp(error));
                });
        });
    };

    const put = async <T>(params: HttpParamsBody): Promise<HttpResponse<T>> => {
        return new Promise(resolve => {
            instancia
                .put<T>(params.path, params.body, {
                    headers: params.headers,
                    params: params.params,
                })
                .then(res => {
                    if (res.data) {
                        return resolve({
                            error: false,
                            response: res.data,
                        });
                    }
                    return resolve(
                        controlarErrorHttp(new AxiosError('Respuesta vacía')),
                    );
                })
                .catch(error => {
                    return resolve(controlarErrorHttp(error));
                });
        });
    };

    const del = async <T>(params: HttpParams): Promise<HttpResponse<T>> => {
        return new Promise(resolve => {
            instancia
                .delete<T>(params.path, {
                    headers: params.headers,
                    params: params.params,
                })
                .then(res => {
                    if (res.data) {
                        return resolve({
                            error: false,
                            response: res.data,
                        });
                    }
                    return resolve(
                        controlarErrorHttp(new AxiosError('Respuesta vacía')),
                    );
                })
                .catch(error => {
                    return resolve(controlarErrorHttp(error));
                });
        });
    };

    const controlarErrorHttp = (err: AxiosError): HttpResponse<any> => {
        return {
            error: true,
            msg: err.message,
            response: err.response?.data,
        };
    };

    return {
        get,
        post,
        put,
        delete: del,
    };
};
