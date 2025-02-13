import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEnergieComponent } from './total-energie.component';

describe('TotalEnergieComponent', () => {
  let component: TotalEnergieComponent;
  let fixture: ComponentFixture<TotalEnergieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalEnergieComponent]
    });
    fixture = TestBed.createComponent(TotalEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
