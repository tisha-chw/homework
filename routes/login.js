const loginControllers = require("../controllers/login");
const express = require("express");
const router = express.Router();

router.get("/", loginControllers.loginPageController);

module.exports = router;
