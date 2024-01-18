import { CryptoObj } from "../../../../src/dominio/objeto/OBJ_CryptoJS";
import { useHttpProxy } from "../../../../src/aplicacion/proxy/http/http.proxy";
import { HttpProxyModel } from "../../../../src/dominio/objeto/OBJ_HttpProxy";
import { CUUsuario } from '../../../../src/aplicacion/casosDeUso/CUUsuario';
import { CUUsuarioModel } from "../../../../src/dominio/modelos/autenticacion/Modelo_Usuario";
import { OBJ_Utils } from "../../../../src/dominio/objeto/OBJ_Utils";
import { useCryptoJS } from "../../../../src/aplicacion/proxy/encriptacion/cryptojs.proxy";
import { UtilsService } from "../../../../src/aplicacion/proxy/utiles/utils.service";
// jest.mock('../../../../src/aplicacion/proxy/http.proxy')
// jest.mock('../../../../src/aplicacion/proxy/cryptojs.proxy')

// const useHttpProxyMock = useHttpProxy as jest.MockedFunction<typeof useHttpProxy>;
// const useEncriptadorMock = useCryptoJS as jest.MockedFunction<typeof useCryptoJS>;

describe("Caso de uso - Usuario", () => {
    let _Http: HttpProxyModel;
    let _Encriptador: CryptoObj;
    let _Utils: OBJ_Utils = UtilsService;
    let CuUsuario: CUUsuarioModel;

    beforeEach(() => {
        CuUsuario = CUUsuario();
        _Http = useHttpProxy('')
        _Encriptador = useCryptoJS()
        jest.spyOn(_Encriptador, 'encriptar').mockReturnValue('password')
    })

    it("Login Cajetín -- Éxito", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: false,
            response: {
                error: false,
                estado: {
                    codigoEstado: '',
                    glosaEstado: '',
                    datos: {
                        datos: {
                            act_token: 'sadssaddasdsad',
                        },
                    }
                }
            }
        }))
        expect.assertions(1)
        CuUsuario.loginCajetin({
            _Http,
            _Encriptador,
            utils: _Utils,
            rut: '19407760-2',
            password: 'PassMovistar123!'
        }).then((res) => {
            expect(res.error).toBeFalsy()
            done()
        })
    })

    it("Login Cajetín -- Error API", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: true
        }))
        expect.assertions(1)
        CuUsuario.loginCajetin({
            _Http,
            _Encriptador,
            utils: _Utils,
            rut: '19407760-2',
            password: 'PassMovistar123!'
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

    it("Login Cajetín -- Error API sin Response", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: false,
            response: null
        }))
        expect.assertions(1)
        CuUsuario.loginCajetin({
            _Http,
            _Encriptador,
            utils: _Utils,
            rut: '19407760-2',
            password: 'PassMovistar123!'
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

    it("Login Cajetín -- Error API throw", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.reject(new Error('Unknown error')))
        expect.assertions(1)
        CuUsuario.loginCajetin({
            _Http,
            _Encriptador,
            utils: _Utils,
            rut: '19407760-2',
            password: 'PassMovistar123!'
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

    it("Login Invitado -- Éxito", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: false,
            response: 'Exito'
        }))
        expect.assertions(1)
        CuUsuario.loginInvitado({
            _Http,
            pin: '973712707',
        }).then((res) => {
            expect(res.error).toBeFalsy()
            done()
        })
    })

    it("Login Invitado -- Error API", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: true,
            response: ''
        }))
        expect.assertions(1)
        CuUsuario.loginInvitado({
            _Http,
            pin: '973712707',
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

    it("Login Invitado -- Error API sin response", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.resolve({
            error: false
        }))
        expect.assertions(1)
        CuUsuario.loginInvitado({
            _Http,
            pin: '973712707',
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

    it("Login Invitado -- Error API throw", (done) => {
        jest.spyOn(_Http, 'post').mockReturnValue(Promise.reject('Error API'))
        expect.assertions(1)
        CuUsuario.loginInvitado({
            _Http,
            pin: '973712707',
        }).then((res) => {
            expect(res.error).toBeTruthy()
            done()
        })
    })

})