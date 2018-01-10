pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CivicBudgetVoting.sol";

contract TestCivicBudgetVoting {

    CivicBudgetVoting voting = CivicBudgetVoting(DeployedAddresses.CivicBudgetVoting());

    function testAddProject() public {        
        bool created = voting.addProject("Project #1");
        Assert.isTrue(created, "Project not created!");
    }

    function testAddProjectNotCreatingDuplicate() public {                
        bool isOk = voting.call(bytes4(bytes32(keccak256("(addProject(Test))"))));
        Assert.isTrue(!isOk, "Duplicate created!");
    }

    function testVote() public {        
        uint projectId = 0;
        voting.vote(projectId);
        var (pId, name, voteCount) = voting.getProject(projectId);
        Assert.equal(1, voteCount, "Vote count doesnt match");
    }

    function testDuplicateVote() public {
        bool isOk = voting.call(bytes4(bytes32(keccak256("vote(0)"))));
        Assert.isTrue(!isOk, "Duplicate vote placed!");
    }

}