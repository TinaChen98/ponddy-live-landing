import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import{ init } from '@emailjs/browser';
init("user_I9kbNANU0UDJQZwgggq3p");


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
