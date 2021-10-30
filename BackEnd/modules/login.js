const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = Schema({
    usuario: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('usuarios',userSchema)