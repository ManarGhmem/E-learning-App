import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencellProjetComponent } from './opencell-projet.component';

describe('OpencellProjetComponent', () => {
  let component: OpencellProjetComponent;
  let fixture: ComponentFixture<OpencellProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpencellProjetComponent]
    });
    fixture = TestBed.createComponent(OpencellProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
