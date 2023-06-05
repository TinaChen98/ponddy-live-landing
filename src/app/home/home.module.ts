import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DiscountComponent } from './discount/discount.component';
import { GetToKnowComponent } from './get-to-know/get-to-know.component';
import { ChoosePonddyComponent } from './choose-ponddy/choose-ponddy.component';
import { SmartComponent } from './smart/smart.component';
import { ThematicComponent } from './thematic/thematic.component';
import { DownloadComponent } from './download/download.component';
import { LearningComponent } from './learning/learning.component';
import { CommunitiesComponent } from './communities/communities.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/components/share.module';
import { EffectiveComponent } from './effective/effective.component';



@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    DiscountComponent,
    GetToKnowComponent,
    ChoosePonddyComponent,
    SmartComponent,
    ThematicComponent,
    DownloadComponent,
    LearningComponent,
    CommunitiesComponent,
    FaqComponent,
    ContactUsComponent,
    EffectiveComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LazyLoadImageModule,
    IvyCarouselModule,
    MatExpansionModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ShareModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
})
export class HomeModule { }
