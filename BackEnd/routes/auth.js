const express = require('express')
const router = express.Router()
const controllerLogin = require('../controller/login')
router.post('/', controllerLogin.obtenerLogin);
module.exports = router