import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './email-ok.component.html',
  styleUrls: ['./email-ok.component.scss']
})
export class EmailOkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    location.href = "/"
  }

}
