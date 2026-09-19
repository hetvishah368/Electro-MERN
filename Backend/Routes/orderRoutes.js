const express=require('express');
const router=express.Router();
const {protect}=require('../middleware/authMiddleware');
const {admin}=require('../middleware/adminmiddleware');
const {createorder,getorders,getorderbyid,updateorder}=require('../controllers/orderController');


//all orders
router.route('/').get(protect,admin,getorders).post(protect,createorder);
router.route('/myorders').get(protect,getorderbyid);
//specific order
router.route('/:id/status').put(protect,admin,updateorder);

module.exports=router;