import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html'
})
export class TaskEditDialogComponent {

  public title: string;

  constructor(public dialogRef: MdDialogRef<TaskEditDialogComponent>) {}
}
