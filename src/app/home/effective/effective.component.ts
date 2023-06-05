import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AppDownloadComponent } from 'src/components/popup/app-download/download.component';

@Component({
  selector: 'home-effective',
  templateUrl: './effective.component.html',
  styleUrls: ['./effective.component.scss']
})
export class EffectiveComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AppDownloadComponent, {
      maxWidth: '1416px',
      width: '90vw',
      height: '95%'
    });
  }
}
