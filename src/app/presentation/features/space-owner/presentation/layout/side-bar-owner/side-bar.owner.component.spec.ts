import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOwnerComponent } from './side-bar.owner.component';

describe('SideBarComponent', () => {
  let component: SideBarOwnerComponent;
  let fixture: ComponentFixture<SideBarOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
