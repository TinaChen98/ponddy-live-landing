import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'home-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.scss']
})
export class ThematicComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number

  cards = [
    { img: 'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/survival.svg', lvl:'LVL1~2', title: 'Survival Chinese', description: 'Basic greetings, time & date, weather, shopping, dining…' },
    { img: 'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/hsk.svg', lvl:'LVL3', title: 'HSK Chinese', description: 'Prepare for HSK test, vocabulary & grammar align with the HSK standard' },
    { img: 'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/business.svg', lvl:'LVL1~2', title: 'Business Chinese', description: 'Describe your job, plans for a business trip, work in China/Chinese company' },
    { img: 'https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/sudy.svg', lvl:'LVL1~2', title: 'Study Abroad Chinese', description: 'Modern Chinese culture, ice-breaking conversation, transportation' },
    ]

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

}
