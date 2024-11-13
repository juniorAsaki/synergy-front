import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosOwnerComponent } from './infos-owner.component';

describe('InfosOwnerComponent', () => {
  let component: InfosOwnerComponent;
  let fixture: ComponentFixture<InfosOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
