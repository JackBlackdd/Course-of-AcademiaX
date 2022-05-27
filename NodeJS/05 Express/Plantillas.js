const express = require('express');
const path = require('path');

const app = express();
const puerto = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Ejemplo', message: 'HTML generado con pug!' });
});

app.listen(puerto, () => {
    console.log(`Escuchando en http://localhost:${puerto}`);
});