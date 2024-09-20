const { ethers } = require("ethers");

const { nftContract } = require("../contracts/nftToken");

exports.totalSupply = async (req, res) => {
  console.log(nftContract);
  const s = await nftContract.totalSupply();
  const formatted = ethers.utils.formatUnits(s, 18)
  res.send(formatted);
};

exports.tokenURI = async (req, res) => {
  const uri = await nftContract.tokenURI(0);
  res.send(uri);
};

exports.symbol = async (req, res) => {
  const symbol = await nftContract.symbol();
  res.send(symbol);
};




