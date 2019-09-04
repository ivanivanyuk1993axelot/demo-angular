import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectWithDataSourceComponent} from './select-with-data-source/select-with-data-source.component';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {GetValueListContinuous$PurePipe} from './data-source/get-value-list-continuous$-pure/get-value-list-continuous$-pure.pipe';
import {GetLabelTextContinuous$PurePipe} from './data-source/get-label-text-continuous$-pure/get-label-text-continuous$-pure.pipe';
import {GetDisplayTextContinuous$PureModule} from './data-source/get-display-text-continuous$-pure/get-display-text-continuous$-pure.module';


@NgModule({
  declarations: [
    GetLabelTextContinuous$PurePipe,
    GetValueListContinuous$PurePipe,
    SelectWithDataSourceComponent,
  ],
  exports: [
    SelectWithDataSourceComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    GetDisplayTextContinuous$PureModule
  ]
})
export class SelectWithDataSourceModule {
}
