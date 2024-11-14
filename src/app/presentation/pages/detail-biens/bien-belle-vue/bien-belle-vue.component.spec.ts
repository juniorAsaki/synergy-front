import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienBelleVueComponent } from './bien-belle-vue.component';

describe('BienBelleVueComponent', () => {
  let component: BienBelleVueComponent;
  let fixture: ComponentFixture<BienBelleVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienBelleVueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienBelleVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
