const express = require('express');
const app = express();

const miLogger = function (req, res, next) {
  console.log('Fecha: ' + Date.now());
  next();
};

app.use(miLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);