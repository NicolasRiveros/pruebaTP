const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const authRoute = require('./routes/auth')
const port = 3000;

app.use(cors());
app.use('api/auth', authRoute);
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/prueba', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if(err){
        console.log('Error al conectarse a la base de datos', err);
    } else {
        app.listen(port,()=>{
            console.log('Conexion en el puerto',port);
        })
    }
});

app.use('/api/login', require('./routes/auth'));

app.use('/api/publicaciones', require('./routes/publicaciones'));