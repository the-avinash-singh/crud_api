//this fill will have all he models




const mongoose=require("mongoose");
//this object will ceate a table of desired attributes the id attribte is auto generated in the database
const productSchema= new mongoose.Schema({
title:String,
price:String,
image:String,
details:String
});
//this code will make the file a module and make it ready for export
//the name given in the module will be the name of database in mongo db
module.exports=mongoose.model("Product",productSchema);