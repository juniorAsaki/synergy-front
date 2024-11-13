import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiensComponent } from './add-biens.component';

describe('AddBiensComponent', () => {
  let component: AddBiensComponent;
  let fixture: ComponentFixture<AddBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBiensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
