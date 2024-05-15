import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibecTextControlRendererComponent } from './fibec-text-control-renderer.component';

describe('FibecTextControlRendererComponent', () => {
  let component: FibecTextControlRendererComponent;
  let fixture: ComponentFixture<FibecTextControlRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibecTextControlRendererComponent]
    });
    fixture = TestBed.createComponent(FibecTextControlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
