const User = require("../models/user");

const findUserByLogin = async (login) => {
  const user = await User.findOne({
    where: {
      login,
    },
  });
  if (user) {
    return user.toJSON();
  }
  return null;
};

const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser.toJSON();
};

const updateUser = async (data) => {
  await User.update(data, {
    where: {
      login: data.login,
    },
  });
  const user = await findUserByLogin(data.login);

  return user;
};

module.exports = {
  createUser,
  updateUser,
  findUserByLogin,
};
