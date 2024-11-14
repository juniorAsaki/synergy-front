import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBiensComponent } from './list-biens.component';

describe('ListBiensComponent', () => {
  let component: ListBiensComponent;
  let fixture: ComponentFixture<ListBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBiensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
