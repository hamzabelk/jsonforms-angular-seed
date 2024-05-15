import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule, LayoutChildrenRenderPropsPipe } from '@jsonforms/angular-material';
import { AppComponent } from './app.component';
import { CustomAutocompleteControlRenderer } from './custom.autocomplete';
import { DataDisplayComponent } from './data.control';
import { LangComponent } from './lang.control';
import { FibecSelectControlRendererComponent } from './components/fibec-select-control-renderer/fibec-select-control-renderer.component';
import { FibecTextControlRendererComponent } from './components/fibec-text-control-renderer/fibec-text-control-renderer.component';
import { FibecGroupControlRendererComponent } from './components/fibec-group-control-renderer/fibec-group-control-renderer.component';
import { LayoutChildrenRenderPropsPipePipe } from './pipes/layout-children-render-props-pipe.pipe';
import { FibecDateControlRendererComponent } from './components/fibec-date-control-renderer/fibec-date-control-renderer.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FibecArrayRendererComponent } from './components/fibec-array-renderer/fibec-array-renderer.component';
// import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomAutocompleteControlRenderer,
    LangComponent,
    DataDisplayComponent,
    FibecSelectControlRendererComponent,
    FibecTextControlRendererComponent,
    FibecGroupControlRendererComponent,
    LayoutChildrenRenderPropsPipePipe,
    FibecDateControlRendererComponent,
    FibecArrayRendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgbDatepickerModule
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
