import { Component,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'dg-description-dialog',
  templateUrl: './description-dialog.component.html',
  styles: []
})
export class DescriptionDialogComponent {
  public description: string;
  constructor(
    public dialogRef: MatDialogRef<DescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onConfirm() {
    this.dialogRef.close(this.description);
  }
  onCancel(string: string) {
    this.dialogRef.close(string);
  }

}
