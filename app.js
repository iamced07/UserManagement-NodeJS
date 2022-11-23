const express = require('express');
const bodyParser = require('body-parser');
const connection = require("./connection");
const userRoute = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user',userRoute);


module.exports = app;