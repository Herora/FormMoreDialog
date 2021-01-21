import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public table = [
    { id: 1,     activate: '1', licenses: 10,  contact: '',contact_phone: '+1 123123123123',contact_email : ''},
    { id: 1285,  activate: '0', licenses: 500, contact: '',contact_phone: '+1 212313123223',contact_email : ''},
    { id: 1287,  activate: '1', licenses: 10,  contact: '',contact_phone: '+1 888888888888',contact_email : ''},
    { id: 1288,  activate: '1', licenses: 50,  contact: '',contact_phone: '+1 ',contact_email : ''},
    { id: 1289,  activate: '1', licenses: 1234,contact: '',contact_phone: '+1 ',contact_email : ''},
    { id: 1290,  activate: '1', licenses: 80,  contact: '',contact_phone: '+1 345678676543',contact_email : ' larry@ool.com'},
    { id: 1292,  activate: '0', licenses: 20,  contact: '',contact_phone: '+1 ',contact_email : ''},
    { id: 1293,  activate: '1', licenses: 5,   contact: '',contact_phone: '+1 ',contact_email : ''}  
  ];

  constructor(public dialog: MatDialog) {}

  public openDialog(id): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
      panelClass: 'custom-modalbox',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog {
 public step1 = true;
 public step2 = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  public view(){

  }
}