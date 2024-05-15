import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester, isStringControl, rankWith } from '@jsonforms/core';

@Component({
  selector: 'app-fibec-text-control-renderer',
  template: 
    `<div class="form-group p-2">
      <label class="form-label">{{ label }}</label>
      <input class="form-control"/>
    </div>
    `
})
export class FibecTextControlRendererComponent extends JsonFormsControl {
  focused = false;
  constructor(jsonformsService: JsonFormsAngularService) {
    super(jsonformsService);
  }
  getEventValue = (event: any) => event.target.value || undefined;
  getType = (): string => {
    if (this.uischema.options && this.uischema.options.format) {
      return this.uischema.options.format;
    }
    if (this.scopedSchema && this.scopedSchema.format) {
      switch (this.scopedSchema.format) {
        case 'email':
          return 'email';
        case 'tel':
          return 'tel';
        default:
          return 'text';
      }
    }
    return 'text';
  };
}

export const FibecTextControlRendererTester: RankedTester = rankWith(
  1,
  isStringControl
);
