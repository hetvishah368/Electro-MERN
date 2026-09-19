
const Order=require('../model/order');
const User=require('../model/user');
const product=require('../model/product');

const getadminstats=async(req,res)=>{
    try{
        const totalOrders=await Order.countDocuments({role:'user'});
        const totalUsers=await User.countDocuments({});
        const totalProducts=await product.countDocuments({});

        const orders=await Order.find({});
        const totalRevenueData= orders.reduce((acc,order)=>{
            return acc+order.totalAmount;
        },0);
        res.status(200).json({success:true,totalOrders,totalUsers,totalProducts,totalRevenue:totalRevenueData});
    } catch(error){
        res.status(500).json({success:false,message:error.message});
    }
}

module.exports={getadminstats};