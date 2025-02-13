import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOperatoireComponent } from './mode-operatoire.component';

describe('ModeOperatoireComponent', () => {
  let component: ModeOperatoireComponent;
  let fixture: ComponentFixture<ModeOperatoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeOperatoireComponent]
    });
    fixture = TestBed.createComponent(ModeOperatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
