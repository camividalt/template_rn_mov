
import {
    HttpParams,
    HttpParamsBody,
    HttpProxyModel,
    HttpResponse,
} from '../../../dominio/objeto/OBJ_HttpProxy';

export const useHttpProxy = (baseUrl: string): HttpProxyModel => {

    const get = async <T>(params: HttpParams): Promise<HttpResponse<T>> => {
        return new Promise(async resolve => {
            const respResolve = await fetch(baseUrl, { method: "GET" })
            return resolve(await respResolve.json());
        });
    };

    const post = async <T>(
        params: HttpParamsBody,
    ): Promise<HttpResponse<T>> => {
        return new Promise(async resolve => {
            const respResolve = await fetch(baseUrl, { method: "POST" })
            return resolve(await respResolve.json())
        });
    };

    const put = async <T>(params: HttpParamsBody): Promise<HttpResponse<T>> => {
        return new Promise(async resolve => {
            const respResolve = await fetch(baseUrl, { method: "PUT" })
            return resolve(await respResolve.json())
        });
    };

    const del = async <T>(params: HttpParams): Promise<HttpResponse<T>> => {
        return new Promise(async resolve => {
            const respResolve = await fetch(baseUrl, { method: "DELETE" })
            return resolve(await respResolve.json())
        });
    };

    return {
        get,
        post,
        put,
        delete: del
    };
};
