import { CULandingModel } from '../../dominio/objeto/Landing.objeto'
export const CULanding = (): CULandingModel => {

    const fnValidarDispositivo: CULandingModel['dispositivoValido'] = async params => {
        return new Promise(resolve => {
            return resolve(params._validadorDispositivo.esValido());
        });
    }

    return {
        dispositivoValido: fnValidarDispositivo,
    }
}
