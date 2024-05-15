import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibecDateControlRendererComponent } from './fibec-date-control-renderer.component';

describe('FibecDateControlRendererComponent', () => {
  let component: FibecDateControlRendererComponent;
  let fixture: ComponentFixture<FibecDateControlRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibecDateControlRendererComponent]
    });
    fixture = TestBed.createComponent(FibecDateControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
