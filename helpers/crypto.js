const crypto = require("crypto");

const generateSalt = ()=> crypto.randomBytes(32).toString("hex");

const generateHash = (password, salt) => crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

const generatePassword = password => {
  const salt = generateSalt();
  const hash = generateHash(password, salt);

  return {
    salt,
    hash,
  };
};

module.exports = {
  generatePassword,
};
