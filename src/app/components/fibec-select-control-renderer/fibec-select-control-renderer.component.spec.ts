import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibecSelectControlRendererComponent } from './fibec-select-control-renderer.component';

describe('FibecSelectControlRendererComponent', () => {
  let component: FibecSelectControlRendererComponent;
  let fixture: ComponentFixture<FibecSelectControlRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibecSelectControlRendererComponent]
    });
    fixture = TestBed.createComponent(FibecSelectControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
