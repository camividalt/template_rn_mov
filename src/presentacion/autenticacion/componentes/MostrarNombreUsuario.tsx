import React from 'react';
import { useUsuarioControlador } from '../../../aplicacion/controladores/Usuario.controlador';
import { Label } from '../../componentes/Label/Label';

export const MostrarNombreUsuario = () => {
    const { obtenerUsuarioPersistencia } = useUsuarioControlador();
    const usuarioPersistencia = obtenerUsuarioPersistencia();
    return (
        <Label align="center">
            Usuario: {usuarioPersistencia?.usuario?.nombre}
            {' - '}
            {usuarioPersistencia?.usuario?.rut}
        </Label>
    );
};
