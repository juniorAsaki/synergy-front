import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienPalmeraieComponent } from './bien-palmeraie.component';

describe('BienPalmeraieComponent', () => {
  let component: BienPalmeraieComponent;
  let fixture: ComponentFixture<BienPalmeraieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienPalmeraieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienPalmeraieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
