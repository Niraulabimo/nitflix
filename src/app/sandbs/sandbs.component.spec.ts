import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandbsComponent } from './sandbs.component';

describe('SandbsComponent', () => {
  let component: SandbsComponent;
  let fixture: ComponentFixture<SandbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandbsComponent]
    });
    fixture = TestBed.createComponent(SandbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
