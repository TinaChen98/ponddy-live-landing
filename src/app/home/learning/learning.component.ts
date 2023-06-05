import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'home-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number
  onDownload = true
  onZoom = false

  constructor(public device: DeviceService) {
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

  clickDownload() {
    if(this.onDownload) {
      this.onDownload = false
    } else {
      this.onDownload = true
    }
  }

  clickZoom() {
    if(this.onZoom) {
      this.onZoom = false
    } else {
      this.onZoom = true
    }
  }
}
