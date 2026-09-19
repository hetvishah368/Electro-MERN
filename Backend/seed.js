require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {connectDB}= require('./config/db');
const User = require('./model/user');
const Product = require('./model/product');
const Order = require('./model/order');
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const adminUser = await User.create({
      name: 'Electro Admin',
	email: 'admin@electro.test',
		password: 'Admin@123',
      role: 'admin'
    });

const products = [
	{
		name: 'Wireless Noise Cancelling Headphones',
		price: 12999,
		description: 'Over-ear Bluetooth headphones with active noise cancellation and a 30-hour battery.',
		category: 'Audio',
		stock: 24,
		imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
		ratings: 4.7,
		numberOfReviews: 86
	},
	{
		name: 'Mechanical RGB Keyboard',
		price: 6499,
		description: 'Compact mechanical keyboard with tactile switches, RGB lighting, and USB-C connectivity.',
		category: 'Accessories',
		stock: 40,
		imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
		ratings: 4.5,
		numberOfReviews: 51
	},
	{
		name: 'Smart Fitness Watch',
		price: 8999,
		description: 'Fitness watch with heart-rate tracking, sleep monitoring, GPS, and a bright AMOLED display.',
		category: 'Wearables',
		stock: 18,
		imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
		ratings: 4.3,
		numberOfReviews: 38
	},
	{
		name: 'Ultra HD 4K Smart TV',
		price: 42999,
		description: '55-inch 4K Ultra HD Smart TV with HDR support, Dolby Audio, and built-in streaming apps.',
		category: 'Television',
		stock: 12,
		imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
		ratings: 4.6,
		numberOfReviews: 72
	},
	{
		name: 'Premium Wireless Earbuds',
		price: 4999,
		description: 'True wireless earbuds with active noise cancellation, touch controls, and up to 28 hours of battery life.',
		category: 'Audio',
		stock: 35,
		imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80',
		ratings: 4.4,
		numberOfReviews: 64
	},
	{
		name: 'Gaming Laptop',
		price: 74999,
		description: 'High-performance gaming laptop with a powerful processor, dedicated graphics, 16GB RAM, and a 144Hz display.',
		category: 'Laptops',
		stock: 9,
		imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
		ratings: 4.8,
		numberOfReviews: 94
	}
	
];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();

seed();
