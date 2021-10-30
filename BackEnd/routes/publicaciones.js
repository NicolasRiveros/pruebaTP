const express = require('express');
const router = express.Router();
const {obtenerPublicacion,agregarPublicacion} = require('../controller/publicaciones');
const app = express();

router.get('/', obtenerPublicacion);
router.post('/', agregarPublicacion);


module.exports = router;
