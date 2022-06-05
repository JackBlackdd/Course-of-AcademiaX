var express = require("express");
const { pedirTodas, pedir, crear, actualizar } = require("../db/pedidos");
const { body, validationResult } = require("express-validator");
var router = express.Router();

let metas = [
  {
    id: "1",
    detalles: "Leer 10 libros",
    periodo: "Semana",
    eventos: "1",
    icono: "📖",
    meta: "10",
    plazo: "2030-01-01",
    completado: 0,
  },
  {
    id: "2",
    detalles: "Leer 5 libros",
    periodo: "Año",
    eventos: "2",
    icono: "📖",
    meta: "20",
    plazo: "2025-01-01",
    completado: 3,
  },
];

/* GET Lista de metas */
router.get("/", function (req, res, next) {
  pedirTodas("metas", (err, metas) => {
    if (err) {
      return next(err);
    }
    console.log(metas);
    res.send(metas);
  });
});

/* GET Meta con ID */
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  pedir("metas", id, (err, meta) => {
    if (err) {
      return next(err);
    }
    if (!meta.length) {
      return res.sendStatus(404);
    }
    res.send(meta[0]);
  });
});

/* POST Crear meta*/
router.post(
  "/",
  body("detalles").isLength({ min: 5 }),
  body("periodo").not().isEmpty(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const nuevaMeta = req.body;
    crear("metas", nuevaMeta, (err, meta) => {
      if (err) {
        return next(err);
      }
      res.send(meta);
    });
  }
);

router.put("/:id",
  body("detalles").isLength({ min: 5 }),
  body("periodo").not().isEmpty(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const body = req.body;
    const id = req.params.id;
    if (body.id != id) {
      return res.sendStatus(409);
    }
    pedir("metas", id, (err, meta) => {
      if (err) {
        return next(err);
      }
      // if (!meta.lenght) {
      //   return res.sendStatus(404);
      // }
      actualizar("metas", body, id, (err, actualizada) => {
        if (err) {
          return next(err);
        }
        console.log(actualizada)
        res.send(actualizada);
      });
      
    });
  }
);

router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  const indice = metas.findIndex((item) => item.id === id);
  if (indice === -1) {
    return res.sendStatus(404);
  }
  metas.splice(indice, 1);
  res.sendStatus(204);
});
module.exports = router;
