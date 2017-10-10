const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create app to handle the methods
const app = express();

//conect with mongodb
mongoose.connect('mongodb://localhost/listItem');
// we assign to global because the mongoose.Promis is deprecated
mongoose.Promise = global.Promise;
// use the body parser to handle the informations that's comes from a user
app.use(bodyParser.json());
// use api file
app.use('/api', require('./route/api'));

// handle the error with the middilware
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
});

// listen to the port 4000
app.listen(4000,function(){
  console.log('the port is listening');
});
