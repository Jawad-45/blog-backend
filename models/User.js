const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"first name is required "]
    },
    last_name:{
        type:String,
        required:[true,"last name is required "]
    },
    femail:{
        type:String,
        lowecase:true,
        trim:true,
        unique:true,
        required:[true,"email is required "]
    },
    password:{
        type:String,
        required:[true,"password  is required "]
    },
    role:{
        type:String,
        
    },
    profile:{
        type:String,
        default:""
    },
},{timestamps:true});
const User = new mongoose.model1("User",UserSchema);
module.exports = User;