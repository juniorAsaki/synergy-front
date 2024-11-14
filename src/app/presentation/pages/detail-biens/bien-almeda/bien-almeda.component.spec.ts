import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienAlmedaComponent } from './bien-almeda.component';

describe('BienAlmedaComponent', () => {
  let component: BienAlmedaComponent;
  let fixture: ComponentFixture<BienAlmedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienAlmedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienAlmedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
