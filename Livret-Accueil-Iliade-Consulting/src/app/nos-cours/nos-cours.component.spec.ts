import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCoursComponent } from './nos-cours.component';

describe('NosCoursComponent', () => {
  let component: NosCoursComponent;
  let fixture: ComponentFixture<NosCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosCoursComponent]
    });
    fixture = TestBed.createComponent(NosCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
