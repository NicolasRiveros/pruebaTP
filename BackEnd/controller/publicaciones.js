const publicacion = require('../modules/publicaciones')
const obtenerPublicacion = async (req, res) => {
    const listadoPublicaciones = await publicacion.find();
    res.json(listadoPublicaciones);
}

const agregarPublicacion = async (req, res) => {
    const nuevo = new publicacion(req.body);
    await nuevo.save();

    res.json("ok");
}
module.exports = { obtenerPublicacion, agregarPublicacion };