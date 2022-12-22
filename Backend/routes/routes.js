const express=require('express');
const {addProduct,getProduct,getProductById,deleteProduct,updateProduct,login,regis,access}=require('../controller/postController');
const router=express.Router();

router.post("/product/add",addProduct);
router.get("/product/get",getProduct);
router.get("/product/getproductbyid/:id",getProductById);
router.delete("/product/delete/:id",deleteProduct);
router.put("/product/update/:id",updateProduct);

module.exports=router;