import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { VideoComponent } from 'src/components/popup/video/video.component';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'home-get-to-know',
  templateUrl: './get-to-know.component.html',
  styleUrls: ['./get-to-know.component.scss']
})
export class GetToKnowComponent implements OnInit {
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

  openDialogVideo() {
    this.dialog.open(VideoComponent, {
      maxWidth: '678px',
    });
  }
}
