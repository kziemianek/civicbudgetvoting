import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CivicBudgetVotingContractService } from './civic-budget-voting-contract.service';
import { NewProjectDialogComponent } from './new-project-dialog.component';
import { Web3Service } from './web3.service';

@NgModule({
  declarations: [AppComponent, NewProjectDialogComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ],
  entryComponents: [NewProjectDialogComponent],
  providers: [Web3Service, CivicBudgetVotingContractService],
  bootstrap: [AppComponent]
})
export class AppModule {}
