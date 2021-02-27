const User = require("../models/user");

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser.toJSON();
};

module.exports = {
  createUser,
};
