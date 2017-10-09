const express = require('express');

const bodyParser = require('body-parser');

// create app to handle the methods
const app = express();
// use the body parser to handle the informations that's comes from a user
app.use(bodyParser.json());
// use api file
app.use('/api', require('./route/api'));

// listen to the port 4000
app.listen(4000,function(){
  console.log('the port is listening');
});
