import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';
const imageList = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Fully-Online-Engaging Lessons.png',
                    'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Flexible-Structure.png',
                    'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Certified-Teachers.png']
const imagmeListMobile = ['https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Fully-Online-Engaging Lessons.png',
                          'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Flexible-Structure.png',
                          'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/Certified-Teachers.png']

const imageList_small = ['./assets/images/home/Fully-Online-Engaging Lessons_small.png',
                         './assets/images/home/Flexible-Structure_small.png',
                         './assets/images/home/Certified-Teachers_small.png']
const imagmeListMobile_small = ['./assets/images/home/Fully-Online-Engaging Lessons_small.png',
                         './assets/images/home/Flexible-Structure_small.png',
                         './assets/images/home/Certified-Teachers_small.png']

@Component({
  selector: 'home-choose-ponddy',
  templateUrl: './choose-ponddy.component.html',
  styleUrls: ['./choose-ponddy.component.scss']
})
export class ChoosePonddyComponent implements OnInit {

  carouselImageList: any
  carouselImageList_small: any

  mobile = true
  web = false
  courseWidth: number
  courseHeight: number

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

}
