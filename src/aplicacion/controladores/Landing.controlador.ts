import { useSeguridadDispositivo } from "../proxy/seguridad/SeguridadDispositivo.proxy";
import { CULandingModel } from '../../dominio/objeto/Landing.objeto';
import { CULanding } from '../casos-de-uso/Landing';

export const useLandingControlador = () => {

    const cuLanding = CULanding();
    const seguridadProxy = useSeguridadDispositivo();
    //const usuarioStore = useUsuarioStore();

    const v = () => {
        return cuLanding.dispositivoValido({ _validadorDispositivo: seguridadProxy });
    }

    return {
        dispositivoValido: v
    }
}
