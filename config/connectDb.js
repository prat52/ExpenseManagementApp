const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
dotenv.config();

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan);
    }catch(error){
        console.log(`${error}`.bgRed);
    }
}

module.exports = {connectDb}