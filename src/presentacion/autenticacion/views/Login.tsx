import React, { useEffect, useState } from 'react';
import { useUsuarioControlador } from '../../../aplicacion/controladores/Usuario.controlador';
import Header from '../componentes/Header';
import Box from '../componentes/Box';
import { InputMovistar } from '../../componentes/input-movistar/InputMovistar';
import { UtilsService } from '../../../aplicacion/proxy/utiles/UtilsService';
import { BotonMovistar } from '../../componentes/boton-movistar/BotonMovistar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AutenticacionStack } from '../../root-navigation/RootNavigationTypes';
import { MostrarNombreUsuario } from '../componentes/MostrarNombreUsuario';
import { StyleSheet, View } from 'react-native';
import { COLORS, GRAY } from '../../assets/styles/Colors';

type Props = NativeStackScreenProps<AutenticacionStack>;

export default ({ navigation }: Props) => {
    // const usuarioController = useUsuarioControlador();

    const [rut, setRut] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const textChangeRut = (text: string) => {
        const rutValidate = UtilsService.rutValidate(text);
        if (rutValidate.valid && rutValidate.rut.length > 7) {
            setRut(rutValidate.rut);
            return;
        }
        setRut(text);
    };

    const limpiarRut = (text: string) => {
        setRut(UtilsService.limpiarRut(text));
    };

    const [loading, setLoading] = useState<boolean>();
    const {
        login3Steps,
        obtenerUsuarioPersistencia,
        guardarUsuarioPersistencia,
    } = useUsuarioControlador();
    const usuarioPersistencia = obtenerUsuarioPersistencia();

    const controlarErrorLogin = (
        res: Awaited<ReturnType<typeof login3Steps>>,
    ) => {
        if (res.tipo === 'no_registrado') {
            // redireccionar
            navigation.navigate('RegistroBienvenida');
        }
        if (res.tipo === 'cambio_pass') {
            // redireccionar cambio pass
        }
    };

    const loginConCredenciales = () => {
        setLoading(true);
        login3Steps(rut, password)
            .then(res => {
                console.log('[LOGIN]then res', res);
                if (res.error) {
                    controlarErrorLogin(res);
                }
            })
            .catch(_err => {
                console.log('[LOGIN]then _err', _err);
                //mostrar mensaje error
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const goBack = () => { };

    useEffect(() => {
        guardarUsuarioPersistencia({
            isLogged: true,
            usuario: {
                id: 1,
                nombre: 'Arturo Vicencio',
                rut: '19407760-2',
            },
            lineaEnContexto: {
                nombre: 'Fijo',
                tipo: 'fijo',
                numero: '973712707',
            },
            lineas: [
                {
                    nombre: 'Fijo',
                    tipo: 'fijo',
                    numero: '973712707',
                },
            ],
            session: {
                access_token: 'sjakdjksadjksdajksaddsa',
                duracion: 6000,
                mcss_token: 'jkasdjdksajkdsasadsad',
                refresh_token: '123989das8d9sa8d98928139',
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const actualizarDatosUsuario = () => {
        if (usuarioPersistencia?.usuario) {
            guardarUsuarioPersistencia({
                usuario: {
                    ...usuarioPersistencia.usuario,
                    nombre: 'Arturo Vicencio Editado',
                },
            });
        }
    };

    return (
        <View>
            <Header goBack={goBack} />
            <Box titulo="¡Hola! Qué alegría verte por acá">
                <InputMovistar
                    label="RUT"
                    value={rut}
                    textChange={limpiarRut}
                    onBlur={() => textChangeRut(rut)}
                />
                <InputMovistar
                    label="Contraseña"
                    tipo="password"
                    textChange={setPassword}
                />
                <BotonMovistar
                    onPress={() => loginConCredenciales()}
                    loading={loading}
                    block
                    style={{ marginTop: 16 }}>
                    Iniciar Sesión
                </BotonMovistar>
            </Box>

            <View style={styles.viewStore}>
                <MostrarNombreUsuario />

                <BotonMovistar
                    onPress={() => actualizarDatosUsuario()}
                    style={{ marginTop: 10 }}>
                    Actualizar nombre en store
                </BotonMovistar>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStore: {
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: COLORS(GRAY[2], 1),
        borderRadius: 10,
    },
});
