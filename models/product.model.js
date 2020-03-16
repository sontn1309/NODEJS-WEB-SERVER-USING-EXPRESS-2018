const mongoose=require('mongoose');

var productSchema=new mongoose.Schema({
    id: String,
    name :String ,
    images :String,
    description :String
});

var Product =mongoose.model('Product',productSchema,'products');
 module.exports=Product;