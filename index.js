const express = require('express');

// create app to handle the methods
const app = express();

// use api file
app.use('/api', require('./route/api'));

// listen to the port 4000
app.listen(4000,function(){
  console.log('the port is listening');
});
