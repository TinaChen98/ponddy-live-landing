import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/utils/device.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { MatDialog } from '@angular/material/dialog';
import { EmailOkComponent } from 'src/components/popup/email-ok/email-ok.component';
import { EmailErrorComponent } from 'src/components/popup/email-error/email-error.component';
import { LoadingComponent } from 'src/components/loading/loading.component';

@Component({
  selector: 'home-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number
  g_recaptcha = false
  model: any
  email: any
  questions: any
  onDisabled = false
  reCaptcha = false
  eForm!: Event;

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
  }
  ngOnInit(): void {
  }

  public captchaResponse = "";
  public resolved(captchaResponse: string): void {
    const newResponse = captchaResponse
      ? `${captchaResponse.substr(0, 7)}...${captchaResponse.substr(-7)}`
      : captchaResponse;
    this.captchaResponse += `${JSON.stringify(newResponse)}\n`;
    console.log('test')
    this.reCaptcha = true
    this.sendEmail(this.eForm)
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    this.captchaResponse += `ERROR; error details (if any) have been logged to console\n`;
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    this.reCaptcha = false
  }

  onEmail(event: any) {
    var text = event.target.value.split('@')
    if(text.length>1 && text[1]!='') {
      this.email = true
    } else {
      this.email = false
    }
    if(this.email && this.questions) {
      this.onDisabled = true
    } else {
      this.onDisabled = false
    }
  }

  onQuestions(event: any) {
    this.questions = event.target.value;
    if(event.target.value) {
      this.questions = true
    } else {
      this.questions = false
    }
    if(this.email && this.questions) {
      this.onDisabled = true
    } else {
      this.onDisabled = false
    }
  }


  public sendEmail(e: Event) {
    this.dialog.open(LoadingComponent);
    this.reCaptcha = true
    if(this.reCaptcha) {
    e.preventDefault();
      emailjs.sendForm('service_x9fj97d', 'template_3ea1g51', e.target as HTMLFormElement, 'user_I9kbNANU0UDJQZwgggq3p')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.dialog.closeAll();
          this.dialog.open(EmailOkComponent);
        }, (error) => {
          console.log(error.text);
          this.dialog.closeAll();
          this.dialog.open(EmailErrorComponent);
        });
    } else {
      this.eForm = e
    }
  }
}
