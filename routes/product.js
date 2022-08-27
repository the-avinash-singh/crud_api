//this file has all the views of db





const router=require("express").Router();
const productController=require("../controllers/productController");
//add data
router.post("/", productController.product_create);
//all data
router.get("/",productController.product_all);
//single data
router.get("/:productId",productController.product_single);
//update data
router.put("/:productId",productController.product_update);
//delete data
router.delete("/:productId");
module.exports=router;