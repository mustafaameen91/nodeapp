const express = require('express');
// create a router
const router = express.Router();
const Items = require('../models/items');

// handle the four methods
router.get('/items',function(req,res,next){
  Items.geoNear(
    {type:"Point",coordinates:[parseFloat(req.query.lag),parseFloat(req.query.lat)]},
    {maxDistance:100000,spherical:true}
  ).then(function(items){
    res.send(items);
  });
});
// add a new items
router.post('/items',function(req,res,next){
  Items.create(req.body).then(function(item){
    res.send(item);
  }).catch(next);//method that's create and save the data that come from Request
});
// update an existing items
router.put('/items/:id',function(req,res,next){
    Items.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
      Items.findOne({_id:req.params.id}).then(function(item){
            res.send(item);
      });
    });
});
// delete an existing items
router.delete('/items/:id',function(req,res,next){
  Items.findByIdAndRemove({_id:req.params.id}).then(function(item){
    res.send(item);
  });
});

module.exports=router;
