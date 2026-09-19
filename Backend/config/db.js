const mongoose=require('mongoose');
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB=async()=>{

    try{
       const connection= await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb connected succesfully");
    }
    catch(error){
        console.error("MongoDb connection failed",error.message);
        process.exit(1);
    }
};

module.exports=connectDB;
