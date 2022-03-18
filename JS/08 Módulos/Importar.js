//? ------------------------------------------------------------
import { sumar, PI, Servicio } from './Exportar.js';

let resultado = sumar(1, 2);
console.log(resultado);
console.log(PI);
const servicio = new Servicio();
console.log(servicio.restarTres(PI));
//? ------------------------------------------------------------
import cualquierNombre from './Exportar.js';

console.log(new cualquierNombre().restarTres(4));
//? ------------------------------------------------------------
import * as todo from './Exportar.js';

console.log(todo.sumar(4, 5));
console.log(todo.Servicio);