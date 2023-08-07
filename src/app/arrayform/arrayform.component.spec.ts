import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayformComponent } from './arrayform.component';

describe('ArrayformComponent', () => {
  let component: ArrayformComponent;
  let fixture: ComponentFixture<ArrayformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayformComponent]
    });
    fixture = TestBed.createComponent(ArrayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
