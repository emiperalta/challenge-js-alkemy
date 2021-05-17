const { User } = require('../database');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
  }
};

const signIn = async (req, res) => {};

const signUp = async (req, res) => {};

module.exports = {
  getAllUsers,
  signIn,
  signUp,
};
