import CryptoJS from 'crypto-js';
import {CryptoObj} from "../../../dominio/objeto/OBJ_CryptoJS";

export const useCryptoJS = ():CryptoObj =>{

    const fnEncriptar:CryptoObj["encriptar"] = (palabra, key, semilla) => {
        const palabraEncripada = CryptoJS.AES.encrypt(palabra, key);
        const palabraEncriptadaStr = palabraEncripada.toString();
        return palabraEncriptadaStr
    }

    return{
        encriptar:fnEncriptar
    }
}
