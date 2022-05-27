const cp = require('child_process');

cp.exec('echo Hola', (error, datos) => {
    if (error) { return console.log('Error!', error); }
    console.log(`stdout: ${datos}`);
});