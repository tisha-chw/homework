const express = require("express");
const apiRouter = require("./api");
const registrationRouter = require("./registration");

const router = express.Router();

router.use("/api", apiRouter);
router.use("/registration", registrationRouter);

module.exports = router;
