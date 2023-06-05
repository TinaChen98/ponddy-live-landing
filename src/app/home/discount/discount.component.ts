import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AppDownloadComponent } from 'src/components/popup/app-download/download.component';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'home-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number

  constructor(public device: DeviceService, public dialog: MatDialog) {
    if (device.$mobile.getValue()) {
      this.courseWidth = 240
      this.courseHeight = 550
      this.mobile = true
      this.web = false
    } else {
      this.courseHeight = 600
      this.courseWidth = 500
      this.mobile = false
      this.web = true
    }
   }

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
