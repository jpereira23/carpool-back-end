const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const port = 80;
const app = express();

app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET"); 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true); 
  next();
});

app.use(bodyParser.json({limit: '50mb'}));

const api = require('./app/routes/index');
app.use('/api', api); 
app.get('/api', function(req, res) {
  res.end('file catcher example'); 
});

const server = http.createServer(app); 

server.listen(port, () => console.log(`Running on localhost:${port}`)); 
