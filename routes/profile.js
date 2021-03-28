const profileControllers = require("../controllers/profile");
const express = require("express");
const router = express.Router();

router.get("/", profileControllers.profilePageController);

module.exports = router;

