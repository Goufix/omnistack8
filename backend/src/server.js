const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const database = require('../database');
const routes = require('./routes');

const app = express();

mongoose.connect(database, { useNewUrlParser: true });

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
