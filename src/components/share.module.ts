import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { EmailOkComponent } from './popup/email-ok/email-ok.component';
import { EmailErrorComponent } from './popup/email-error/email-error.component';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './footer/footer.component';
import { AppDownloadComponent } from './popup/app-download/download.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VideoComponent } from './popup/video/video.component';

@NgModule({
  declarations: [
    EmailOkComponent,
    EmailErrorComponent,
    LoadingComponent,
    FooterComponent,
    AppDownloadComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    LazyLoadImageModule
  ],

  exports: [
    EmailOkComponent,
    EmailErrorComponent,
    LoadingComponent,
    FooterComponent,
    AppDownloadComponent,
    VideoComponent
  ]
})
export class ShareModule {
}
