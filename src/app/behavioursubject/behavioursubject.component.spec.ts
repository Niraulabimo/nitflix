import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursubjectComponent } from './behavioursubject.component';

describe('BehavioursubjectComponent', () => {
  let component: BehavioursubjectComponent;
  let fixture: ComponentFixture<BehavioursubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioursubjectComponent]
    });
    fixture = TestBed.createComponent(BehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
