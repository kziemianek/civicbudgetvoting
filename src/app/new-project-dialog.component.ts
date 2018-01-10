import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: 'new-project-dialog.component.html'
})
export class NewProjectDialogComponent {
  public projectName: string;

  constructor(
    public dialogRef: MatDialogRef<NewProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  create(): void {
    this.dialogRef.close(this.projectName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
