const express=require('express');
const {protect}=require('../middleware/authMiddleware');
const {admin}=require('../middleware/adminmiddleware');
const {getproducts,getproductbyid,createproduct,updateproduct,deleteproduct}=require('../controllers/productController');
const multer=require('multer');
const upload=multer({dest:'uploads/'});

const router=express.Router();
//all products
router.route('/').get(getproducts).post(protect,admin,upload.single('image'),createproduct);
//specific product
router.route('/:id').get(getproductbyid).put(protect,admin,updateproduct).delete(protect,admin,deleteproduct);


module.exports=router;
