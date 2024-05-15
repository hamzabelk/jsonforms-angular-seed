import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAbstractControl, JsonFormsAngularService } from '@jsonforms/angular';
import { LayoutRenderer } from '@jsonforms/angular-material';
import { ArrayLayoutProps, GroupLayout, JsonFormsState, OwnPropsOfRenderer, Paths, RankedTester, StatePropsOfArrayLayout, UISchemaElement, UISchemaTester, and, createDefaultValue, findUISchema, isArrayObjectControl, isObjectArray, isObjectArrayControl, isObjectArrayWithNesting, mapDispatchToArrayControlProps, mapStateToArrayLayoutProps, rankWith, setReadonly, uiTypeIs, unsetReadonly } from '@jsonforms/core';

@Component({
  selector: 'app-fibec-array-renderer',
  templateUrl: './fibec-array-renderer.component.html',
  styleUrls: ['./fibec-array-renderer.component.css']
})
export class FibecArrayRendererComponent
  extends JsonFormsAbstractControl<StatePropsOfArrayLayout>
  implements OnInit, OnDestroy
{
  noData: boolean;
  addItem: (path: string, value: any) => () => void;
  moveItemUp: (path: string, index: number) => () => void;
  moveItemDown: (path: string, index: number) => () => void;
  removeItems: (path: string, toDelete: number[]) => () => void;
  uischemas: {
    tester: UISchemaTester;
    uischema: UISchemaElement;
  }[];
  constructor(jsonFormsService: JsonFormsAngularService) {
    super(jsonFormsService);
  }
  mapToProps(state: JsonFormsState): StatePropsOfArrayLayout {
    const props = mapStateToArrayLayoutProps(state, this.getOwnProps());
    return { ...props };
  }
  remove(index: number): void {
    this.removeItems(this.propsPath, [index])();
  }
  add(): void {
    this.addItem(
      this.propsPath,
      createDefaultValue(this.scopedSchema, this.rootSchema)
    )();
  }
  up(index: number): void {
    this.moveItemUp(this.propsPath, index)();
  }
  down(index: number): void {
    this.moveItemDown(this.propsPath, index)();
  }
  ngOnInit() {
    super.ngOnInit();
    const { addItem, removeItems, moveUp, moveDown } =
      mapDispatchToArrayControlProps(
        this.jsonFormsService.updateCore.bind(this.jsonFormsService)
      );
    this.addItem = addItem;
    this.moveItemUp = moveUp;
    this.moveItemDown = moveDown;
    this.removeItems = removeItems;
  }
  mapAdditionalProps(props: ArrayLayoutProps) {
    this.noData = !props.data || props.data === 0;
    this.uischemas = props.uischemas;
  }
  getProps(index: number): OwnPropsOfRenderer {
    console.warn('test');
    const uischema = findUISchema(
      this.uischemas,
      this.scopedSchema,
      this.uischema.scope,
      this.propsPath,
      undefined,
      this.uischema,
      this.rootSchema
    );
    console.warn(uischema);
    if (this.isEnabled()) {
      unsetReadonly(uischema);
    } else {
      setReadonly(uischema);
    }
    return {
      schema: this.scopedSchema,
      path: Paths.compose(this.propsPath, `${index}`),
      uischema,
    };
  }
  trackByFn(index: number) {
    return index;
  }
}

export const FibecArrayRendererTester: RankedTester = rankWith(
  4,
  isObjectArray
);
