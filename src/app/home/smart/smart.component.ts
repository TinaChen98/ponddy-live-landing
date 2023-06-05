import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AppDownloadComponent } from 'src/components/popup/app-download/download.component';
import { DeviceService } from 'src/utils/device.service';

const imageList = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/smart-w.png']
const imagmeListMobile = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/smart-p.png']

const imageList_small = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/smart-small.png']
const imagmeListMobile_small = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/smart-small.png']


@Component({
  selector: 'home-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {
  carouselImageList: any
  carouselImageList_small: any

  constructor(public device: DeviceService, public dialog: MatDialog) {
    this.device.$mobile.subscribe(isMobile => {
      if (isMobile) {
        this.carouselImageList = imagmeListMobile
        this.carouselImageList_small = imagmeListMobile_small
      } else {
        this.carouselImageList = imageList
        this.carouselImageList_small = imageList_small
      }
    })
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
