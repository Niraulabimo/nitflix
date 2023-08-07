import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedfarrayComponent } from './nestedfarray.component';

describe('NestedfarrayComponent', () => {
  let component: NestedfarrayComponent;
  let fixture: ComponentFixture<NestedfarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedfarrayComponent]
    });
    fixture = TestBed.createComponent(NestedfarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
