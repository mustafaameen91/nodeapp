const express = requir('express');
// create a router
const router = express.Router();
// handle the four methods
router.get('/list',function(req,res){
  res.send('GET Request');
});
// add a new items
router.post('/list',function(req,res){
  res.send('POST Request');
});
// update an existing items
router.put('/items/:id',function(req,res){
  res.send('UPDATE Request');
});
// delete an existing items
router.delete('/items/:id',function(req,res){
  res.send('DELETE Request');
});

module.exports=router;
