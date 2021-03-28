const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const userService = require("../services/user");

const { validatePassword } = require("../helpers/crypto");

passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
      passwordField: "password",
    },
    async (login, password, cb) => {
      try {
        const user = await userService.findUserByLogin(login);
        if (!user) {
          return cb(null, false);
        }
        const isValid = validatePassword(password, user.hash, user.salt);

        if (isValid) {
          return cb(null, user);
        } else {
          return cb(null, false);
        }
      } catch (e) {
        cb(e);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser(async (user, cb) => {
  const userFromDatabase = await userService.findUserByLogin(user.login);
  if (userFromDatabase) {
    if (user.hash === userFromDatabase.hash) {
      cb(null, userFromDatabase);
    }
  }
  cb(null, false);
});
