import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { RankedTester, isEnumControl, rankWith } from '@jsonforms/core';

@Component({
  selector: 'fibec-select-control-renderer',
  template: `
  <div class="form-group p-2">
    <label class="form-label">{{ label }}</label>
    <select class="form-control">
      <option *ngFor="let value of scopedSchema.enum">{{ value }}</option>
    </select>
  </div>`
})
export class FibecSelectControlRendererComponent extends JsonFormsControl {

}

export const FibecEnumControlTester: RankedTester = rankWith(2, isEnumControl);

