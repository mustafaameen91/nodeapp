const mongoose = require('mongoose');
const schema = mongoose.Schema;
//create our schema & model
const ItemsSchema = new schema({
  name:{
    type: String,
    require:[true,'the name is require']
  },
  age:{
    type:String,

  },
  available:Boolean,
  default:false
});

//create our model and collaction
const Items = mongoose.model('item',ItemsSchema);
// exports the schema to use it in our api
model.exports = Items;
