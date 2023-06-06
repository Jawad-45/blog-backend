const mongoose = require ("mongoose");
const postschema = new mongoose.Schema({
title:{
    type:string,
    required:[true,"title is required"]
},
image:{
    type:string,
    required:[true,"image is required"]
},
body:{
    type:string,
    required:[true,"blog body is required"]
},
author:{
    type:string,
},
category:{
    type:string,
},
is_publish:{
    type:boolean,
    default:false
},
 is_approvedByAdmin:{
    type:boolean,
    default:false
}

},{timestamps:true});
const post = mongoose.model1("post",postschema);
module.exports = post;