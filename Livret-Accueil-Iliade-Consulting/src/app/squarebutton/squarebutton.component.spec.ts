import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarebuttonComponent } from './squarebutton.component';

describe('SquarebuttonComponent', () => {
  let component: SquarebuttonComponent;
  let fixture: ComponentFixture<SquarebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquarebuttonComponent]
    });
    fixture = TestBed.createComponent(SquarebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
