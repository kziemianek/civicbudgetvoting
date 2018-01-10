import { CivicProject } from './civic-project.type';
import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';
import * as Contract from 'truffle-contract';
import * as civicbudgetvoting_artifacts from '../../build/contracts/CivicBudgetVoting.json';

@Injectable()
export class CivicBudgetVotingContractService {
  civicBudgetVoting: Contract;
  instance: any;
  account: any;

  projects: CivicProject[] = [];

  constructor(private web3Service: Web3Service) {
    this.civicBudgetVoting = Contract(civicbudgetvoting_artifacts);
    this.civicBudgetVoting.setProvider(this.web3Service.web3.currentProvider);
    this.civicBudgetVoting.deployed().then(instance => {
      this.instance = instance;
      this.refreshProjects();
    });
    this.web3Service.web3.eth.getAccounts((err, accounts) => {
      this.account = accounts[5];
    });
  }

  addProject(projectName: string): Promise<void> {
    return this.instance
      .addProject(projectName, { from: this.account, gas: 1000000 })
      .then(value => {
        this.refreshProjects();
      });
  }

  getProjects(): CivicProject[] {
    return this.projects;
  }

  refreshProjects(): void {
    this.projects.length = 0;
    const that = this;
    this.instance.getProjectCount().then(count => {
      for (let i = 0; i <= count - 1; i++) {
        this.instance.getProject(i).then(function(project) {
          that.projects.push({
            id: project[0],
            name: project[1],
            voteCount: project[2]
          });
        });
      }
    });
  }

  vote(projectId: number): Promise<void> {
    return this.instance
      .vote(projectId, { from: this.account })
      .then(result => {
        this.refreshProjects();
      });
  }
}
