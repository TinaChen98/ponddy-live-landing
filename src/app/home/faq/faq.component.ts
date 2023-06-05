import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DeviceService } from 'src/utils/device.service';

@Component({
  selector: 'home-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, public device: DeviceService) {
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

  ngOnInit(): void { }

  panelOpenState = false;
  panelSmallOpenState = false;
  faqOpen = ''
  faqSmallOpen = ''

  onFocus(item: any, item_name: any){
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#'+item_name+'_'+item,
      duration: 250
    });
    if(item_name == 'faq_item') {
      this.faqOpen = item_name+'_'+(item+1)
    } else {
      this.faqSmallOpen = item_name+'_'+(item+1)
    }
    console.log('faqOpen: '+this.faqOpen)
    console.log('faqSmallOpen: '+this.faqSmallOpen)
    console.log('#'+item_name+'_'+(item+1))
  }

  clickPanel(state: boolean, item: string) {
    this.panelOpenState = state
    if(this.panelOpenState) {
      this.faqOpen = item
    } else {
      this.faqOpen = ''
    }
  }


  clickSmallPanel(state: boolean, item: string) {
    this.panelSmallOpenState = state

    if(this.panelSmallOpenState) {
      this.faqSmallOpen = item
    } else {
      this.faqSmallOpen = ''
    }
  }
}
