const http = require('http');

const nombre_de_equipo = '127.0.0.1';
const puerto = 3000;

const servidor = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo');
});

servidor.listen(puerto, nombre_de_equipo, () => {
    console.log(`Sirviendo en http://${nombre_de_equipo}:${puerto}/`);
});
