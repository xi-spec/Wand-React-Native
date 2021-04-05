const User = require('../models/userModel');

async function createUser(req, res) {
  const user = new User(req.body);
  user.save();
  res.json(user);
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateUser(req, res) {
  const id = req.params.userId || req.body._id;

  try {
    const userUpdated = await User
      .findByIdAndUpdate(id, req.body, { new: true });

    res.json(userUpdated);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}
module.exports = {
  createUser,
  updateUser,
  getAllUsers,
};
