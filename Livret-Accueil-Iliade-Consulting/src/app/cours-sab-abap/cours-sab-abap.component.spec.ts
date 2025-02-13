import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursSabAbapComponent } from './cours-sab-abap.component';

describe('CoursSabAbapComponent', () => {
  let component: CoursSabAbapComponent;
  let fixture: ComponentFixture<CoursSabAbapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursSabAbapComponent]
    });
    fixture = TestBed.createComponent(CoursSabAbapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
