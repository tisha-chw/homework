const registrationControllers = require("../controllers/registration");
const express = require("express");
const router = express.Router();

router.get("/", registrationControllers.registrationPageController);

module.exports = router;
