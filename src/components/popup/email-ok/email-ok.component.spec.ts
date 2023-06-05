import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOkComponent } from './email-ok.component';

describe('EmailOkComponent', () => {
  let component: EmailOkComponent;
  let fixture: ComponentFixture<EmailOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
