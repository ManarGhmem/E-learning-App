import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoiliadeComponent } from './photoiliade.component';

describe('PhotoiliadeComponent', () => {
  let component: PhotoiliadeComponent;
  let fixture: ComponentFixture<PhotoiliadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoiliadeComponent]
    });
    fixture = TestBed.createComponent(PhotoiliadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
