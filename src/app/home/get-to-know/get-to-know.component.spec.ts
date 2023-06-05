import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnowComponent } from './get-to-know.component';

describe('GetToKnowComponent', () => {
  let component: GetToKnowComponent;
  let fixture: ComponentFixture<GetToKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetToKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
