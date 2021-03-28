const userService = require("../services/user");
const registrationRequestSchema = require("../schemas/registration");

const profilePageController = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
};

const profileController = async (req, res, next) => {
  try {
    const value = await registrationRequestSchema.validateAsync(req.body);
    const user = await userService.updateUser(value);
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
  profilePageController,
  profileController,
};
