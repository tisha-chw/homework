const userService = require("../services/user");
const registrationRequestSchema = require("../schemas/registration");

const registrationPageController = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("registration");
  }
};

const registrationController = async (req, res, next) => {
  try {
    const value = await registrationRequestSchema.validateAsync(req.body);
    const user = await userService.createUser(value);

    req.login(user, function (err) {
      if (err) {
        res.sendStatus(400);
        return next(err);
      }
      res.sendStatus(200);
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
};

module.exports = {
  registrationPageController,
  registrationController,
};
