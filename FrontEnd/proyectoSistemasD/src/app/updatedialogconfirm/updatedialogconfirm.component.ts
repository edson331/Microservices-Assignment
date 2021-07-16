import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  nombre: string;
  cantidad: string;
}

@Component({
  selector: 'app-updatedialogconfirm',
  templateUrl: './updatedialogconfirm.component.html',
  styleUrls: ['./updatedialogconfirm.component.css']
})
export class UpdatedialogconfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatedialogconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log("acepto")
  }
}
