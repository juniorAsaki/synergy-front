import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReservationCustomerComponent } from './detail-reservation-customer.component';

describe('DetailReservationCustomerComponent', () => {
  let component: DetailReservationCustomerComponent;
  let fixture: ComponentFixture<DetailReservationCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailReservationCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailReservationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
