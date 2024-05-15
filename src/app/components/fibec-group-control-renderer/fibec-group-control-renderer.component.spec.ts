import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibecGroupControlRendererComponent } from './fibec-group-control-renderer.component';

describe('FibecGroupControlRendererComponent', () => {
  let component: FibecGroupControlRendererComponent;
  let fixture: ComponentFixture<FibecGroupControlRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibecGroupControlRendererComponent]
    });
    fixture = TestBed.createComponent(FibecGroupControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
