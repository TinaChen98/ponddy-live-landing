import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceService } from 'src/utils/device.service';

const imageList = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/popup-phone-w.png',
                   'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/app-store-w.svg',
                   'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/google-play-w.svg']
const imageListMobile = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/popup-phone-p.png',
                          'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/app-store-p.svg',
                          'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/google-play-p.svg']

const imageList_small = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/popup-phone-small.png']
const imageListMobile_small = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/popup-phone-small.png']


@Component({
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class AppDownloadComponent implements OnInit {
  carouselImageList: any
  carouselImageList_small: any

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

    this.device.$mobile.subscribe(isMobile => {
      if (isMobile) {
        this.carouselImageList = imageListMobile
        this.carouselImageList_small = imageListMobile_small
      } else {
        this.carouselImageList = imageList
        this.carouselImageList_small = imageList_small

      }
    })
  }

  ngOnInit(): void {
  }

}
