import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapProjetComponent } from './sap-projet.component';

describe('SapProjetComponent', () => {
  let component: SapProjetComponent;
  let fixture: ComponentFixture<SapProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SapProjetComponent]
    });
    fixture = TestBed.createComponent(SapProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
