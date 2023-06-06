const category = require("../models/Category");


//create category
const createCategory = async (req,res)=>{
    // find if category already exist
    let category = await category.findOne({categoryName:req.body.categoryName});
    if(category == null){
        await category.create({
            categoryName:req.body.categoryName
        });
        res.json({
            success:true,
            required:"category is created"
        })
    }else {
        res.json({
            sucess:false,
            message:"category already exist"
        })
    }
}
const getAllCategories = async (req,res)=>{
    let categories = await category.find({});
    res.json({
        success:false,
        message:"category fetched scuessfully"
        data:categories
    })
    const updateCategory = async (req,res)=>{
        await Category.findByidAndUpdate
    }
}