export function sumar(a, b) {
    return a + b;
}

export const PI = 3.14;

export class Servicio {

    tres = 3;

    restarTres(num) {
        return num - this.tres;
    }
}

export default Servicio;