import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UsuarioStoreProxy } from '../../../dominio/objeto/stores/Usuario.store.proxy';
import { ModeloUsuario } from '../../../dominio/modelos/autenticacion/Usuario.modelo';

const initialState: { datos?: ModeloUsuario } = {};

export const useUsuarioStore = create<UsuarioStoreProxy>()(devtools((set, get) => ({
    establecerDatos(datos) {
        set({
            datos: {
                ...datos,
            },
        });
        return datos;
    },
    limpiarDatos() {
        set(initialState);
    },
    obtenerDatos() {
        return get().datos || null;
    },
    obtenerUsuario() {
        return get().datos?.usuario || null;
    },
    obtenerSesion() {
        return get().datos?.session || null;
    },
    obtenerLineas() {
        return get().datos?.lineas || [];
    },
    obtenerLineaEnContexto() {
        return get().datos?.lineaEnContexto || null;
    },
})));
