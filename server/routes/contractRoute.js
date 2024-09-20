const express = require("express");
const {
  totalSupply,
  tokenURI,
  symbol
} = require("../controllers/contractController");

const router = express.Router();

router.route("/totalSupply").get(totalSupply);
router.route("/tokenURI").get(tokenURI);
router.route("/symbol").get(symbol);

module.exports = router;
