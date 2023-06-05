import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {

  now_user = 0

  user = [
        { userImg: "https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/user_Tara.png", userContent: "I like the teaching mode, interactive, fun and focus on HSK. I have studied with other institutions before, but your teacher's pronunciation is more standard. Moreover, you have the official certification of HSK, which reassures me.", userFrom: "Tara from India" },
        { userImg: "https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/user_Bubloo.png", userContent: "The company I work for needs more employees who know Chinese, so I started to learn Chinese, which will most likely help me get a promotion and raise my salary. I was lucky to find Ponddy and learning Chinese here is very useful for my work.", userFrom: "Bubloo from Pakistan" },
        { userImg: "https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/user_Taylor.png", userContent: "Although I am still learning how to speak and write Chinese, the more exposure I have to it, like that of attending the Live Lessons, the more I am able to see that I can understand much more than I thought. Thank you Ponddy!!! Keep up the great work !", userFrom: "Taylor from USA" } ,
        { userImg: "https://d2zu2xr8ooiuow.cloudfront.net/live-lessons/user_Saadia.png", userContent: "Many thanks to Teacher Li! I will continue to study with you and take the HSK3 test, and definitely apply for a one-semester or one-academic-year scholarship to study in China! See you there !", userFrom: "Saadia from Bangladesh" }
      ]
  constructor() { }

  ngOnInit(): void {
  }

  nowUser(user: any){
    this.now_user = user;
  }


}
