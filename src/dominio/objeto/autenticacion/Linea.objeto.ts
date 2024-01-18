export type TIPO_LINEA = 'prepago' | 'contrato' | 'hibrido' | 'salta' | 'fijo';

export interface OBJLinea {
    numero: string;
    nombre: string;
    tipo: TIPO_LINEA;
}
