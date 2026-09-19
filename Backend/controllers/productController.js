const Product = require('../model/product');
const cloudinary = require('../config/cloudinary');

const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getproductbyid = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        if (products) {
            res.status(200).json(products);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createproduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        let imageUrl = " ";
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateproduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.price = price || product.price;
            product.description = description || product.description;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                console.log(result);
                product.imageUrl = result.secure_url;
            }
            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteproduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.status(200).json({ message: "Product deleted" });
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getproducts, getproductbyid, createproduct, updateproduct, deleteproduct };