import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoOwnerComponent } from './update-info-owner.component';

describe('UpdateInfoOwnerComponent', () => {
  let component: UpdateInfoOwnerComponent;
  let fixture: ComponentFixture<UpdateInfoOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateInfoOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInfoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
