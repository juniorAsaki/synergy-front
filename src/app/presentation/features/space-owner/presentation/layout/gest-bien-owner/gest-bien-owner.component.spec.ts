import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestBienOwnerComponent } from './gest-bien-owner.component';

describe('GestBienOwnerComponent', () => {
  let component: GestBienOwnerComponent;
  let fixture: ComponentFixture<GestBienOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestBienOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestBienOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
