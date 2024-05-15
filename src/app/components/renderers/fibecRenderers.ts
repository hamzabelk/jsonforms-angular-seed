import { HorizontalLayoutRenderer, LabelRenderer, LabelRendererTester, VerticalLayoutRenderer, horizontalLayoutTester, verticalLayoutTester } from "@jsonforms/angular-material";
import { RankedTester } from "@jsonforms/core";
import { FibecTextControlRendererComponent, FibecTextControlRendererTester } from "../fibec-text-control-renderer/fibec-text-control-renderer.component";
import { FibecEnumControlTester, FibecSelectControlRendererComponent } from "../fibec-select-control-renderer/fibec-select-control-renderer.component";
import { FibecGroupControlRendererComponent, FibecGroupControlTester } from "../fibec-group-control-renderer/fibec-group-control-renderer.component";
import { FibecDateControlRendererComponent, FibecDateControlTester } from "../fibec-date-control-renderer/fibec-date-control-renderer.component";
import { FibecArrayRendererComponent, FibecArrayRendererTester } from "../fibec-array-renderer/fibec-array-renderer.component";

export const fibecRenderers : {
    tester: RankedTester;
    renderer: any;
}[] = [
    // controls
    { tester: FibecTextControlRendererTester, renderer: FibecTextControlRendererComponent },
    { tester: LabelRendererTester, renderer: LabelRenderer },
    { tester: FibecEnumControlTester, renderer: FibecSelectControlRendererComponent },
    { tester: FibecGroupControlTester, renderer: FibecGroupControlRendererComponent },
    { tester: FibecDateControlTester, renderer: FibecDateControlRendererComponent },
    { tester: FibecArrayRendererTester, renderer: FibecArrayRendererComponent },
      // layouts
    { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
    { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
  ];