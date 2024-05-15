import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibecArrayRendererComponent } from './fibec-array-renderer.component';

describe('FibecArrayRendererComponent', () => {
  let component: FibecArrayRendererComponent;
  let fixture: ComponentFixture<FibecArrayRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibecArrayRendererComponent]
    });
    fixture = TestBed.createComponent(FibecArrayRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
