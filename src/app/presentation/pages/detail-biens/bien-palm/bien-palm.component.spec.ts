import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienPalmComponent } from './bien-palm.component';

describe('BienPalmComponent', () => {
  let component: BienPalmComponent;
  let fixture: ComponentFixture<BienPalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienPalmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienPalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
