pragma solidity ^0.4.2;

contract CivicBudgetVoting {

    struct Project {
        uint id;
        string name;
        bool created;
        uint voteCount;
        mapping( address =>  bool ) civicVotes;
    }

    uint projectIdSeq = 0;

    mapping( uint => Project) projects;        

    function addProject(string name) public returns (bool created) {
        uint projectId = projectIdSeq++;
        require(projects[projectId].created == false);        
        projects[projectId] = Project(projectId, name, true, 0);
        return true;
    }

    function vote(uint projectId) public {
        require(projects[projectId].created == true);
        require(projects[projectId].civicVotes[msg.sender] == false);
        projects[projectId].voteCount++;
        projects[projectId].civicVotes[msg.sender] = true;
    }    

    function getProject(uint projectId) view public returns(uint, string, uint) {
        return (projects[projectId].id, projects[projectId].name, projects[projectId].voteCount);
    }

    function getProjectVoteCount(uint projectId) view public returns(uint) {
        var (,, voteCount) = getProject(projectId);
        return voteCount;
    }

    function getProjectCount() view public returns (uint) {
        return projectIdSeq;
    }

}