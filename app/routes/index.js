const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const app = express();
const server = require('http').createServer(app);

var Person = function(){
  this.firstName = "";
  this.lastName = "";
  this.longitude = 0.0;
  this.latitude = 0.0;
}
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

MongoClient.connect('mongodb://localhost:27017/carpool', {
    poolSize: 12
  },
  (err, client) => {
    if(err) return console.log(err);
    var db = client.db('carpool');
    router.post('/registerPerson', (req, res) => {
      var person = new Person();
      person.firstName = req.body.firstName;
      person.lastName = req.body.lastName;
      person.longitude = req.body.longitude;
      person.latitude = req.body.latitude;
      db.collection('people').save(person, function(err, aPerson){
        if(err){
          res.send(err);
        }else{
          res.json(aPerson);
        }
      });
    });

 });
