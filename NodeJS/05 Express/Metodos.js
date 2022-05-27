const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', function (req, res) {
    res.send('GET');
});

app.post('/', function (req, res) {
    res.send('POST');
});

app.put('/', function (req, res) {
    res.send('PUT');
});

app.delete('/', function (req, res) {
    res.send('DELETE');
});

app.listen(puerto, () => {
    console.log(`Escuchando en http://localhost:${puerto}`);
});