import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapAbapProjetComponent } from './sap-abap-projet.component';

describe('SapAbapProjetComponent', () => {
  let component: SapAbapProjetComponent;
  let fixture: ComponentFixture<SapAbapProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SapAbapProjetComponent]
    });
    fixture = TestBed.createComponent(SapAbapProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
