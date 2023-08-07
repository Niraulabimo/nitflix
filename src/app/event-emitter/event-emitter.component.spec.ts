import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterComponent } from './event-emitter.component';

describe('EventEmitterComponent', () => {
  let component: EventEmitterComponent;
  let fixture: ComponentFixture<EventEmitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventEmitterComponent]
    });
    fixture = TestBed.createComponent(EventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
