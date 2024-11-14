import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienPalmiersComponent } from './bien-palmiers.component';

describe('BienPalmiersComponent', () => {
  let component: BienPalmiersComponent;
  let fixture: ComponentFixture<BienPalmiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienPalmiersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienPalmiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
