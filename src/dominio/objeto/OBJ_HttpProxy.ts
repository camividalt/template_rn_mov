import {AxiosHeaders, HeadersDefaults, RawAxiosRequestHeaders} from 'axios';

export interface HttpParams {
    path: string;
    headers?: {[param: string]: string};
    params?: {[param: string]: string};
}

export interface HttpParamsBody {
    path: string;
    headers?: {[param: string]: string};
    body: any;
    params?: {[param: string]: string};
}

export type HttpResponse<Response = any, Tipo = string> = {
    error: boolean;
    msg?: string;
    tipo?: Tipo;
    response?: Response;
};

export type HttpProxyModel = {
    get: <T>(params: HttpParams) => Promise<HttpResponse<T>>;
    post: <T>(params: HttpParamsBody) => Promise<HttpResponse<T>>;
    put: <T>(params: HttpParamsBody) => Promise<HttpResponse<T>>;
    delete: <T>(params: HttpParams) => Promise<HttpResponse<T>>;
};

export type HttpHeadersModel =
    | RawAxiosRequestHeaders
    | AxiosHeaders
    | Partial<HeadersDefaults>;

export class HttpError extends Error {
    tipo?: string;
    response?: any;

    constructor(
        msg: string,
        tipo: string | undefined = undefined,
        response: any,
    ) {
        super(msg);
        this.tipo = tipo;
        this.response = response;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
