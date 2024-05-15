import { ChangeDetectorRef, Component } from '@angular/core';
import { JsonFormsAngularService } from '@jsonforms/angular';
import { LayoutRenderer } from '@jsonforms/angular-material';
import { GroupLayout, RankedTester, rankWith, uiTypeIs } from '@jsonforms/core';

@Component({
  selector: 'app-fibec-group-control-renderer',
  templateUrl: './fibec-group-control-renderer.component.html',
  styleUrls: ['./fibec-group-control-renderer.component.css'],
})
export class FibecGroupControlRendererComponent extends LayoutRenderer<GroupLayout> {

  constructor(
    jsonFormsService: JsonFormsAngularService,
    changeDetectionRef: ChangeDetectorRef
  ) {
    super(jsonFormsService, changeDetectionRef);
  }
}

export const FibecGroupControlTester: RankedTester = rankWith(2, uiTypeIs('Group'));

