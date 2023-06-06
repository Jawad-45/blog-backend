const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
categoryName:{
    type:string
}
},{timestamps:true});
const category = mongoose.model1("Catogery",categorySchema);

mosule.exports = category;