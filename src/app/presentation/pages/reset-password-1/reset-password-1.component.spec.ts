import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassword1Component } from './reset-password-1.component';

describe('ResetPassword1Component', () => {
  let component: ResetPassword1Component;
  let fixture: ComponentFixture<ResetPassword1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassword1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPassword1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
