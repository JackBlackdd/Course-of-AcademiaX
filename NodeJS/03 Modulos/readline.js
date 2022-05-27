const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    console.log('Linea: ', input);
});

rl.question('Cual es tu lenguaje favorito?\n', respuesta => {
    console.log(`Tu respuesta es ${respuesta}`);
    rl.close();
});

