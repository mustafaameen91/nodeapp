const mongoose = require('mongoose');
const schema = mongoose.Schema;
// create a geolocation schema
const GeoSchema = new schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});
//create our schema & model
const ItemsSchema = new schema({
  name:{
    type: String,
    required:[true,'the name is require']
  },
  age:{
    type:String,

  },
  available:{
  type:Boolean,
  default:false
  },
  geometry:GeoSchema
});

//create our model and collaction
const Items = mongoose.model('item',ItemsSchema);
// exports the schema to use it in our api
module.exports = Items;
