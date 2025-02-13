import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursOpenCellComponent } from './cours-open-cell.component';

describe('CoursOpenCellComponent', () => {
  let component: CoursOpenCellComponent;
  let fixture: ComponentFixture<CoursOpenCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursOpenCellComponent]
    });
    fixture = TestBed.createComponent(CoursOpenCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
