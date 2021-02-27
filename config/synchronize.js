const User = require("../models/user");

const synchronize = async () => {
  await User.sync({ alter: true });
};

module.exports = synchronize;
