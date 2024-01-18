import {useSeguridadDispositivo} from "../proxy/seguridad/seguridadDispositivo.proxy";
import {CULandingModel} from '../../dominio/objeto/OBJ_Landing';
import {CULanding} from '../casosDeUso/CULanding';
export const useLandingController = () => {

    const cuLanding = CULanding();
    const seguridadProxy = useSeguridadDispositivo();
    //const usuarioStore = useUsuarioStore();

    const v = () => {
        return cuLanding.dispositivoValido({_validadorDispositivo:seguridadProxy});
    }

    return {
        dispositivoValido:v
    }
}
