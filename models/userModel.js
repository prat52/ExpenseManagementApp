const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'name is required']
    },
    email:{
        type : String,
        required :[true,'email is require and should be unique'],
        unique : true
    },
    password:{
        type : String,
        required:[true,'Password required'],
    },
},
{timestamps:true}
);

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;