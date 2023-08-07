import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhoraComponent } from './chhora.component';

describe('ChhoraComponent', () => {
  let component: ChhoraComponent;
  let fixture: ComponentFixture<ChhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChhoraComponent]
    });
    fixture = TestBed.createComponent(ChhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
