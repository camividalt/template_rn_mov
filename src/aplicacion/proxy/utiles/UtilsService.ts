import { OBJ_Utils } from '../../../dominio/objeto/Utils.objeto';
import { clean, format, validate } from 'rut.js';

export const UtilsService: OBJ_Utils = {
    rutValidate(rut: string) {
        const rutLimpio = clean(rut);
        return {
            rut: format(rutLimpio),
            valid: validate(rutLimpio),
        };
    },
    formatearRut(rut, conPuntos = true) {
        const rutLimpio = clean(rut);
        return format(rutLimpio, { dots: conPuntos });
    },
    limpiarRut(rut) {
        return clean(rut);
    },
};
