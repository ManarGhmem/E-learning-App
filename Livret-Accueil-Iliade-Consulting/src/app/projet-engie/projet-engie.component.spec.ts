import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEngieComponent } from './projet-engie.component';

describe('ProjetEngieComponent', () => {
  let component: ProjetEngieComponent;
  let fixture: ComponentFixture<ProjetEngieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetEngieComponent]
    });
    fixture = TestBed.createComponent(ProjetEngieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
