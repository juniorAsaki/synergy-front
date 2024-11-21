import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilReservationComponent } from './page-accueil-reservation.component';

describe('PageAccueilReservationComponent', () => {
  let component: PageAccueilReservationComponent;
  let fixture: ComponentFixture<PageAccueilReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAccueilReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccueilReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
