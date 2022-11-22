const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use('/user',userRoute);

module.exports = app;