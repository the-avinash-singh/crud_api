//this fille will define the structure of db
const Product=require("../model/Product");
//get all product
//async is used to make the method asynchronous so as to use awaite fn
const product_all=async(req,res)=>{
    //because of async we have to use try catch to counter any error
    try{
        //created a variable havind all the gathred values
        //find() is momgodb fn to find al the values in db
        const product=await product.find();
        //sending the data in jason format
        res.json(products);
    }
    catch(error){
        res.json({message:error});
    }
};
//single product
const product_single=async(req,res)=>{
    try{
        //this code will get the data whose id is matched
        const product=await product.findbyId(req.params.productId);
        res.json(product);
    }
    catch(error){
        res.json({message:error});
    }
};
//add product
const product_create = async (req, res) => {
      //this code stores the data of front end into a vriable
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        //save a mongo db fn to add a new data in db
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};
//update product
const product_update=async(req,res)=>{
    try{
        //creating a variable having object (having info)
        const product={
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            details:req.body.details

    };
    const updateProduct=await Product.findByIdAndUpdate(
        {_id:req.params.productId},
        product
    );
    res.json(updateProduct);
}
catch(error){
    res.json({message:error});
}
};
//delete product
const product_delete=async(req,res)=>{};
module.exports={
    product_create,
    product_all,
    product_delete,
    product_single,
    product_update
}