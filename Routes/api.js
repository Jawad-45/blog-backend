const express = require("express");
const router = express.Router();
const {createCayegory} = require("../Controller/CategoryController")
//define all routes here
// router.get("/test",(req,res)=>{
//     res.json({
//         status:true,
//         message:"the route is working"
//     })
// })
router.post("/store/category,createcategory")

module.exports = router;