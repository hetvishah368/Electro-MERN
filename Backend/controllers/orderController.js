const Order = require('../model/order');

// create new order
const createorder = async (req, res) => {
     try { const { items, totalAmount, address, paymentId, paymentStatus } = req.body; 
     if (!items || !totalAmount || !address) {
         return res.status(400).json({ message: "Missing required fields" }); 
        }
          const order = new Order({ user: req.user._id, items,
             totalAmount, address, paymentId,
              paymentStatus }); 
          await order.save(); 
          res.status(201).json({ message: "Order confirmed successfully", order }); 
        } 
          catch (error) { res.status(500).json({ message: error.message });
         } };

const getorderbyid = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('items.productId', 'name price');
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getorders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('user', 'id name');
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateorder = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findById(req.params.id);
        if (order) {
            order.paymentStatus = status;
            await order.save();
            res.status(200).json({ message: "Order status updated successfully", order });
        }
        else {
            res.status(404).json({ message: "Order not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createorder, getorders, getorderbyid, updateorder };