const fs = require('fs');

// sync
const ls = fs.readdirSync(__dirname);
console.log(ls);

// async
fs.readdir(__dirname, (err, ls) => {
    console.log(ls);
});

// sync
const archivo = __dirname + '/os.js';
const stats = fs.statSync(archivo);
console.log(stats.isFile());
console.log(stats);
console.log('Listo!');

// async
fs.stat(archivo, (err, stats) => {
    console.log(stats.isFile());
    console.log(stats);
});
console.log('Listo!');

