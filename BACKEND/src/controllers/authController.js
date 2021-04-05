const md5 = require('md5');
const User = require('../models/userModel');

async function register(req, res) {
  const { email, password, name } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(300);
    res.send('exists');
  }

  if (!user) {
    try {
      const newUser = new User({
        email,
        password: md5(password),
        name,
      });
      newUser.save();
      res.status(200);
      res.json(newUser);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
}

async function login(req, res) {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
  }
}

function logout(req) {
  req.logout();
}

module.exports = { register, login, logout };
