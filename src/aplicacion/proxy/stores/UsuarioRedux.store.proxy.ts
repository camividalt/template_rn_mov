import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { UsuarioStoreProxy } from '../../../dominio/objeto/stores/Usuario.store.proxy';
import { ModeloUsuario } from '../../../dominio/modelos/autenticacion/Usuario.modelo';
import { RootState } from './Redux.store';

const initialState: { datos?: ModeloUsuario } = {};

export const usuarioStoreSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        establecerDatos: (state, action) => {
            state.datos = action.payload;
        },
        limpiarDatos: (state) => {
            delete state.datos
        },
    },
})

const { establecerDatos, limpiarDatos } = usuarioStoreSlice.actions

export const useUsuarioStore = (): UsuarioStoreProxy => {
    const usuario = useSelector((state: RootState) => state.usuario.datos)
    const dispatch = useDispatch()
    return {
        datos: undefined,
        establecerDatos: (datos) => {
            dispatch(establecerDatos(datos))
        },
        limpiarDatos: () => {
            dispatch(limpiarDatos())
        },
        obtenerDatos: () => {
            if (usuario) {
                return usuario
            }
            return null;
        },
        obtenerUsuario: () => {
            if (usuario) {
                return usuario.usuario
            }
            return null;
        },
        obtenerSesion: () => {
            if (usuario) {
                return usuario.session
            }
            return null;
        },
        obtenerLineas: () => {
            if (usuario) {
                return usuario.lineas
            }
            return [];
        },
        obtenerLineaEnContexto: () => {
            if (usuario) {
                return usuario.lineaEnContexto
            }
            return null;
        },
    }
};
