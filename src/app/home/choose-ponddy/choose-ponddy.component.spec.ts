import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePonddyComponent } from './choose-ponddy.component';

describe('ChoosePonddyComponent', () => {
  let component: ChoosePonddyComponent;
  let fixture: ComponentFixture<ChoosePonddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePonddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePonddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
