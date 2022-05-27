const express = require('express');
const path = require('path');

const app = express();
const puerto = 3000;

app.use(express.static(path.join(__dirname, 'publico')));

app.listen(puerto, () => {
  console.log(`Escuchando en http://localhost:${puerto}`);
});