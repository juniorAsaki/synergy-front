import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBienOwnerComponent } from './list-bien-owner.component';

describe('ListBienOwnerComponent', () => {
  let component: ListBienOwnerComponent;
  let fixture: ComponentFixture<ListBienOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBienOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBienOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
