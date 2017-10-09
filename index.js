const express = require('express');
// create app to handle the methods
const app = express();
// create a get method
app.get('/',function(req,res){
  res.send('from node with love');
});
// listen to the port 4000
app.listen(4000,function(){
  console.log('the port is listening');
});
