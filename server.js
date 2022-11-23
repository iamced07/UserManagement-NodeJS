const http = require('http');
const app = require('./app');
const connection = require("./connection");
const port = 3000;

const server = http.createServer(app);

connection.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Unable to connect to the database: ", error);
  });

  connection.sync().then(()=>{
    server.listen(port);
  });