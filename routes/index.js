const express = require("express");
const apiRouter = require("./api");
const loginRouter = require("./login");
const profileRouter = require("./profile");
const registrationRouter = require("./registration");

const router = express.Router();

router.use("/api", apiRouter);
router.use("/login", loginRouter);
router.use("/", profileRouter);
router.use("/registration", registrationRouter);

module.exports = router;
