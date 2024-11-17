import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPersoCustomerComponent } from './infos-perso-customer.component';

describe('InfosPersoCustomerComponent', () => {
  let component: InfosPersoCustomerComponent;
  let fixture: ComponentFixture<InfosPersoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosPersoCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosPersoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
