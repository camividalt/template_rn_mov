import {ModeloUsuario} from '../../modelos/autenticacion/Modelo_Usuario';

export interface UsuarioStoreProxy {
    datos?: Partial<ModeloUsuario>;
    establecerDatos: (datos: Partial<ModeloUsuario>) => void;
    limpiarDatos: () => void;
    obtenerDatos: () => Partial<ModeloUsuario> | null;
    obtenerUsuario: () => ModeloUsuario['usuario'] | null;
    obtenerSesion: () => ModeloUsuario['session'] | null;
    obtenerLineas: () => ModeloUsuario['lineas'];
    obtenerLineaEnContexto: () => ModeloUsuario['lineaEnContexto'] | null;
}
