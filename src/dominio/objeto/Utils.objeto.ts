export interface RutValidate {
    rut: string;
    valid?: boolean;
}

export interface OBJ_Utils {
    rutValidate: (rut: string) => RutValidate;
    formatearRut: (rut: string, conPuntos?: boolean) => string;
    limpiarRut: (rut: string) => string;
}
