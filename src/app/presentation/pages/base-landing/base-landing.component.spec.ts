import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLandingComponent } from './base-landing.component';

describe('BaseLandingComponent', () => {
  let component: BaseLandingComponent;
  let fixture: ComponentFixture<BaseLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
