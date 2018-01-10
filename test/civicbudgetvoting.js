var CivicBudgetVoting = artifacts.require('.//CivicBudgetVoting.sol');

contract('CivicBudgetVoting', function() {
  it('should add new project', function() {    
    return CivicBudgetVoting.deployed().then(function(instance) {
      return instance.addProject
        .call('New project')
        .then(function(created) {
          assert(created, 'Project not created');
        });
    });
  });
});
