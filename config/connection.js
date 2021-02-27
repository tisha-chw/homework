const { Sequelize } = require("sequelize");
require('dotenv').config();

const connection = new Sequelize("homework", "root", process.env.DB_PASSWORD, {
  host: "mysql",
  dialect: "mysql",
});

module.exports = connection;
