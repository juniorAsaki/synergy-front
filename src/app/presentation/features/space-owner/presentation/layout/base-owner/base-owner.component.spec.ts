import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOwnerComponent } from './base-owner.component';

describe('BaseOwnerComponent', () => {
  let component: BaseOwnerComponent;
  let fixture: ComponentFixture<BaseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
