import React from 'react';
import {useUsuarioController} from '../../../aplicacion/controladores/UsuarioController';
import { Label } from '../../components/Label/Label';

export const MostrarNombreUsuario = () => {
    const {obtenerUsuarioPersistencia} = useUsuarioController();
    const usuarioPersistencia = obtenerUsuarioPersistencia();
    return (
        <Label align="center">
            Usuario: {usuarioPersistencia?.usuario?.nombre}
            {' - '}
            {usuarioPersistencia?.usuario?.rut}
        </Label>
    );
};
