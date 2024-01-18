export class Exception extends Error {
    tipo: string;

    constructor(msg: string, tipo: string) {
        super(msg);
        this.tipo = tipo;
        Object.setPrototypeOf(this, Exception.prototype);
    }
}
