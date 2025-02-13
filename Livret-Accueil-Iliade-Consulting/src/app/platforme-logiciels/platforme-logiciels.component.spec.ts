import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformeLogicielsComponent } from './platforme-logiciels.component';

describe('PlatformeLogicielsComponent', () => {
  let component: PlatformeLogicielsComponent;
  let fixture: ComponentFixture<PlatformeLogicielsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformeLogicielsComponent]
    });
    fixture = TestBed.createComponent(PlatformeLogicielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
