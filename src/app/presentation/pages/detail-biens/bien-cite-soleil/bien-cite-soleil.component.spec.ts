import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienCiteSoleilComponent } from './bien-cite-soleil.component';

describe('BienCiteSoleilComponent', () => {
  let component: BienCiteSoleilComponent;
  let fixture: ComponentFixture<BienCiteSoleilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienCiteSoleilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienCiteSoleilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
