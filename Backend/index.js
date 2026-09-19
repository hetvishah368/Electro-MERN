const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
const authRoute=require('./Routes/authRoute');
const productRoutes=require('./Routes/productRoutes');
const orderRoutes=require('./Routes/orderRoutes');

const app=express();
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
     console.log("GET / called");
    res.send("hello")
})

app.use('/api/auth',authRoute);
app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/analytics',require('./Routes/analyticsRoute'));

const PORT=process.env.PORT||8000;

const server=app.listen(PORT,'0.0.0.0',()=>{
       console.log('SERVER STARTED');
    console.log(server.address());
})

server.on('error', (err) => {
    console.error('SERVER ERROR:', err);
});




