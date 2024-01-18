import {CULandingModel} from '../../dominio/objeto/OBJ_Landing'
export const CULanding = (): CULandingModel => {

    const fnValidarDispositivo: CULandingModel['dispositivoValido'] = async params => {
        return new Promise(resolve=>{
            return resolve(params._validadorDispositivo.esValido());
        });
    }

    return {
        dispositivoValido:fnValidarDispositivo,
    }
}
