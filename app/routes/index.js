const express = require('express'); 
const router = express.Router(); 
const MongoClient = require('mongodb').MongoClient;
const app = express(); 
const server = require('http').createServer(app); 


const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err; 
  res.status(501).json(response); 
};

let response = {
  status: 200, 
  data: [], 
  message: null
};

MongoClient.connect('mongodb://localhost:27017/bartend', {
    poolSize: 12
  }, 
  (err, client) => {
    if(err) return console.log(err); 
    var db = client.db('carpool'); 
    router.post('/registerPerson', (req, res) => {
          
    });
  
 });
 

