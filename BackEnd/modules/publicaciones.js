const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let publicacionesSchema = new Schema({
    texto: String,
    fecha_publi: Date,
    autor: String,
});

module.exports = mongoose.model('publicaciones',publicacionesSchema)
