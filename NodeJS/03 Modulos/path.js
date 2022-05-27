// CommonJS
// const { basename, dirname, format, join } = require('path');

// ES6
import { basename, dirname, format, join } from 'path';

console.log(basename(__filename));
console.log(dirname(__filename));
console.log(format({
    root: '/',
    name: 'archivo',
    ext: '.txt'
}));
console.log(join(__dirname, 'carpeta', 'archivo.js'));