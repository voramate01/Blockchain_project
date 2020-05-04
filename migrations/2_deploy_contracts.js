var contract = artifacts.require("./Mycontract.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};