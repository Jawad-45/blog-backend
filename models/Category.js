const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
categoryName:{
    type: String
}
},{timestamps:true});
const category = mongoose.model("Catogery",categorySchema);

module.exports = category;