import { validarDispositivo } from "./ValidarDispositivo.objeto";

export interface CULandingModel {
    dispositivoValido: (params: { _validadorDispositivo: validarDispositivo }) => Promise<boolean>,
    //versionValida:(params:{}) => Promise<boolean>,
    //usuarioLogeado: (params:{}) => Promise<boolean>,
}
