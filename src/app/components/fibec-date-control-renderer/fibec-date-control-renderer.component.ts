import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { RankedTester, isDateControl, rankWith } from '@jsonforms/core';
import { isDate } from 'util/types';

@Component({
  selector: 'app-fibec-date-control-renderer',
  templateUrl: './fibec-date-control-renderer.component.html',
  styleUrls: ['./fibec-date-control-renderer.component.css']
})
export class FibecDateControlRendererComponent extends JsonFormsControl {

}

export const FibecDateControlTester: RankedTester = rankWith(2, isDateControl);

