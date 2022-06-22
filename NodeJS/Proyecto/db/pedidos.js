const db = require("./configuration.js");

function pedirTodas(tabla, callback) {
  db.any(`SELECT * FROM ${tabla}`)
    .then((resultado) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error);
    });
}

function pedir(tabla, id, callback) {
  db.any(`SELECT * FROM ${tabla} WHERE id =${id}`)
    .then((resultado) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error);
    });
}

function crear(tabla, item, callback) {
  const keys = Object.keys(item);
  const propiedades = keys.join(", ");
  const valores = keys.map((key) => `'${item[key]}'`).join(", ");

  db.any(`INSERT INTO ${tabla} (${propiedades}) VALUES(${valores}) returning *`)
    .then(([resultado]) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error);
    });
}
function actualizar(tabla, id, item, callback) {
  const keys = Object.keys(item);
  const actualizaciones = keys
    .map((key) => `${key} = '${item[key]}'`)
    .join(", ");

  const sql = `UPDATE ${tabla} SET ${actualizaciones} WHERE id = ${id} returning *`;
  db.any(sql)
    .then(([resultado]) => {
      callback(null, resultado);
    })
    .catch((error) => {
      callback(error);
    });
}
function borrar(tabla, id, callback) {
  db.any(`DELETE FROM ${tabla} WHERE id = ${id}`)
    .then(() => {
      callback(null);
    })
    .catch((error) => {
      callback(error);
    });
}
module.exports = {
  pedirTodas,
  pedir,
  crear,
  actualizar,
  borrar,
};
