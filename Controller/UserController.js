const User = require("../models/User");

/* User Create */
const userCreate = async (req, res) => {
  try {
    await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      profile: req.body.profile,
    });
    res.status(201).json({
      message: "User Create Successfully",
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

/**
 * Update User
 */
const userUpdate = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      profile: req.body.profile,
    });
    res.status(201).json({
      message: "User Update Successfully",
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

const userDelete = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOneAndDelete({_id: id})
        res.status(200).json(user)
    }
    catch(error) {
        console.log(error);
        res.status(400).json({error: "Cannot Delete"})
    }
}


const userFindAll = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    }
    catch(error) {
        res.status(400).json({error: "Cannot Find Users"})
    }
}

module.exports = {
  userCreate,
  userUpdate,
userFindAll,
userDelete
};
