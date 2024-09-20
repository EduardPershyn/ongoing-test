const express = require("express");
const router = express.Router();

const contractRoute = require("./contractRoute");

router.use("/contract", contractRoute);

module.exports = router;
