const express = require('express');
const app = express();
const puerto = 3000;

// app.use(express.json());

const usuarios = [
    'Robert Plant',
    'Jimmy Page',
    'John Paul Jones'
];

app.get('/', function (req, res) {
    res.send('Hogar');
});

app.get(/z/, function (req, res) {
    res.send(req.url)
});

app.get('/usuarios', function (req, res) {
    const html = usuarios.map(usuario => `<li>${usuario}</li>`).join('');
    res.send(html);
});

app.post('/usuarios', function (req, res) {
    const usuario = req.body.usuario;
    usuarios.push(usuario);
    res.status(201).json(usuario);
});

app.put('/usuarios/:id', function (req, res) {
    const usuario = req.body.usuario;
    const indice = req.params.id;
    usuarios[indice] = usuario;
    res.json(usuario);
});

app.delete('/usuarios/:id', function (req, res) {
    const indice = req.params.id;
    const borrado = usuarios.splice(indice, 1);
    res.json(borrado);
});

app.listen(puerto, () => {
    console.log(`Escuchando en http://localhost:${puerto}`);
});