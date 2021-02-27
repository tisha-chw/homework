const userService = require("../services/user");
const registrationRequestSchema = require("../schemas/registration");

const registrationPageController = (req, res) => res.render("registration");

const registrationController = async (req, res, next) => {
  try {
    const value = await registrationRequestSchema.validateAsync(req.body);
    await userService.createUser(value);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
};

module.exports = {
  registrationPageController,
  registrationController,
};
