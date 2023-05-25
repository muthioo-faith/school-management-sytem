import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import {MatDialog} from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';






export interface Section {
name: any;


 
}


interface projects {
  name: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  

  
  notes: Section[] = [
    {
      name: 'Home',
    },
  ]
  
  projects: Section[] = [
    {
      name: 'Dashboard',
    },
  ]

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
// value: any;


constructor(public dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(DashboardComponent, {
    width: '800px',
    height: '600px',

  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
  });
}


}
