import { Pipe, PipeTransform } from '@angular/core';
import { JsonSchema, Layout, OwnPropsOfRenderer, UISchemaElement } from '@jsonforms/core';

@Pipe({ name: 'layoutChildrenRenderProps' })
export class LayoutChildrenRenderPropsPipePipe implements PipeTransform {
  transform(
    uischema: Layout,
    schema: JsonSchema,
    path: string
  ): OwnPropsOfRenderer[] {
    const elements = (uischema.elements || []).map((el: UISchemaElement) => ({
      uischema: el,
      schema: schema,
      path: path,
    }));
    return elements;
  }
}
