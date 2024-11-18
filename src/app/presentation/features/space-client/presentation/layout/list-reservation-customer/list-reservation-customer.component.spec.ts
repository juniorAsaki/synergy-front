import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationCustomerComponent } from './list-reservation-customer.component';

describe('ListReservationCustomerComponent', () => {
  let component: ListReservationCustomerComponent;
  let fixture: ComponentFixture<ListReservationCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReservationCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
