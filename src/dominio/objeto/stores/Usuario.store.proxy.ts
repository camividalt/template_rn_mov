import { ModeloUsuario } from '../../modelos/autenticacion/Usuario.modelo';

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
