var CivicBudgetVoting = artifacts.require("./CivicBudgetVoting.sol");

module.exports = function(deployer) {
  deployer.deploy(CivicBudgetVoting);
};
