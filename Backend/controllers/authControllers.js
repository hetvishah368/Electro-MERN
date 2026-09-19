const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const genratetoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

//register user

const registeruser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existinguser = await User.findOne({ email });

        if (existinguser) {
            return res.status(400).json({
                msg: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        // Create user ONLY ONCE
        const user = await User.create({
            name,
            email,
            password: hashpassword,
            isVerified: false
        });


        // Send response
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: genratetoken(user._id)
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error);

        res.status(500).json({
            msg: "Server error",
            error: error.message
        });
    }
};



//login user
const loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: genratetoken(user._id)
        });
    }
    catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

//get all users
const getusers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = { registeruser, loginuser, getusers };
