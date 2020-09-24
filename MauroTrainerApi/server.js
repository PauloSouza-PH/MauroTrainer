const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciandoo app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/MauroTrainer', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes/routes'));

app.listen(3002);