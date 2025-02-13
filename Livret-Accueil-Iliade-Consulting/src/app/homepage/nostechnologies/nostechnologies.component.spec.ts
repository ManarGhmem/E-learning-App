import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NostechnologiesComponent } from './nostechnologies.component';

describe('NostechnologiesComponent', () => {
  let component: NostechnologiesComponent;
  let fixture: ComponentFixture<NostechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NostechnologiesComponent]
    });
    fixture = TestBed.createComponent(NostechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
