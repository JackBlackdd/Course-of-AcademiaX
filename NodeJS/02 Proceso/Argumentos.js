// console.log(process.argv);

function obtenerValor(parametro) {
    const i = process.argv.indexOf(parametro);
    return process.argv[i + 1];
}

console.log(obtenerValor('install'));
console.log(obtenerValor('-D'));
