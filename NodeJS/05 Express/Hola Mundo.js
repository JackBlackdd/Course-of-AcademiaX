const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(puerto, () => {
  console.log(`Escuchando en http://localhost:${puerto}`);
});