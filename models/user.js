const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");
const { generatePassword } = require("../helpers/crypto");

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
        const { hash, salt } = generatePassword(val);

        this.setDataValue("hash", hash);
        this.setDataValue("salt", salt);
      },
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportSerial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

module.exports = User;
