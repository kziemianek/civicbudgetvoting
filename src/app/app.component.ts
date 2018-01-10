import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { CivicBudgetVotingContractService } from './civic-budget-voting-contract.service';
import { CivicProject } from './civic-project.type';
import { NewProjectDialogComponent } from './new-project-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  projectVoteCount: number;

  constructor(
    public civicBudgetVotingService: CivicBudgetVotingContractService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewProjectDialogComponent, {
      width: '250px',
      data: { projectName: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createProject(result);
    });
  }

  createProject(projectName: string): void {
    this.civicBudgetVotingService.addProject(projectName).then(() => {
      this.snackBar.open('Project created', '', {
        duration: 500
      });
    });
  }

  vote(project: CivicProject): void {
    this.title = this.title + 'a';
    this.civicBudgetVotingService.vote(project.id).then(() => {
      this.snackBar.open('Vote valid', '', {
        duration: 500
      });
    }, () => {
      this.snackBar.open('Vote invalid', '', {
        duration: 500
      });
    });
  }
}
