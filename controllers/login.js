const loginRequestSchema = require("../schemas/login");
const passport = require("passport");

const loginPageController = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};

const loginController = async (req, res, next) => {
  await loginRequestSchema.validateAsync(req.body);

  passport.authenticate("local", (err, user) => {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        res.sendStatus(200);
      });
    }
  })(req, res, next);
};

module.exports = {
  loginPageController,
  loginController,
};
