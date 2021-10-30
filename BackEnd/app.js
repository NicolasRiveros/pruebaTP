const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const publiRouts = require('./routes/publicaciones');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/api', publiRouts);

module.exports = app;