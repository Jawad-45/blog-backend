const express = require("express");
const router = express.Router();
const {userCreate, userUpdate, userFindAll, userDelete} = require("../Controller/UserController");
const {createCategory} = require("../Controller/CategoryController")

// Category Routes
router.post("/user", userCreate)
router.post("/user/update/:id", userUpdate)
router.get("/users", userFindAll)
router.delete("/delete/user/:id", userDelete)


module.exports = router;