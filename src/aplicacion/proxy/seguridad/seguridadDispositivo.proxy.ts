import JailMonkey from 'jail-monkey';
import { validarDispositivo } from '../../../dominio/objeto/OBJ_validarDispositivo';

export const useSeguridadDispositivo = ():validarDispositivo => {
    const fnEstaRoot:validarDispositivo['esValido'] = async () => {
        if (JailMonkey.isJailBroken()) {
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    }

    return { esValido:fnEstaRoot }
}
