import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupementhomeComponent } from './groupementhome.component';

describe('GroupementhomeComponent', () => {
  let component: GroupementhomeComponent;
  let fixture: ComponentFixture<GroupementhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupementhomeComponent]
    });
    fixture = TestBed.createComponent(GroupementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
