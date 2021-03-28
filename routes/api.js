const express = require("express");
const { loginController } = require("../controllers/login");
const { logoutController } = require("../controllers/logout");
const { profileController } = require("../controllers/profile");
const { registrationController } = require("../controllers/registration");

const router = express.Router();
router.post("/login", loginController);
router.post("/logout", logoutController);
router.post("/registration", registrationController);
router.put("/profile", profileController);
module.exports = router;
