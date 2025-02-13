import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRenduSapIsuComponent } from './compte-rendu-sap-isu.component';

describe('CompteRenduSapIsuComponent', () => {
  let component: CompteRenduSapIsuComponent;
  let fixture: ComponentFixture<CompteRenduSapIsuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteRenduSapIsuComponent]
    });
    fixture = TestBed.createComponent(CompteRenduSapIsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
