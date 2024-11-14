import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienNabilComponent } from './bien-nabil.component';

describe('BienNabilComponent', () => {
  let component: BienNabilComponent;
  let fixture: ComponentFixture<BienNabilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienNabilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienNabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
