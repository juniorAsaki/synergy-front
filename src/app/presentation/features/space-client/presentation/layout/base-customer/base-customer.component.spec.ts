import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCustomerComponent } from './base-customer.component';

describe('BaseCustomerComponent', () => {
  let component: BaseCustomerComponent;
  let fixture: ComponentFixture<BaseCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
