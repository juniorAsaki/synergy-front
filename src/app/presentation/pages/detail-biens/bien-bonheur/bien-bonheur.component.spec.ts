import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBonheurComponent } from './bien-bonheur.component';

describe('BienBonheurComponent', () => {
  let component: BienBonheurComponent;
  let fixture: ComponentFixture<BienBonheurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienBonheurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienBonheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
