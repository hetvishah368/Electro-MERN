const express=require('express');
const router=express.Router();
const {protect}=require('../middleware/authmiddleware');
const {admin}=require('../middleware/adminmiddleware');
const {getadminstats}=require('../controllers/analyticsController');

router.get('/',protect,admin,getadminstats);

module.exports=router;