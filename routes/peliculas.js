var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController")

/* Creación de peliculas */

router.get("/crear", peliculasController.crear);
router.post("/crear", peliculasController.guardado);

/* Listar peliculas */

router.get("/", peliculasController.listado);

/* Detalle peliculas */

router.get("/:id", peliculasController.detalle);

/* Actualizar peliculas */

router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

/* Borrar peliculas */

router.post("/borrar/:id", peliculasController.borrar);


module.exports = router;
