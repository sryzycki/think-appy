import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdToolbarModule,
} from '@angular/material';

import { PageHeaderComponent } from './components/page-header/page-header.component';

const CORE_MODULES = [
  CommonModule,
  FlexLayoutModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdToolbarModule,
];

@NgModule({
  exports: [
    ...CORE_MODULES,
    PageHeaderComponent,
  ],
  imports: CORE_MODULES,
  declarations: [
    PageHeaderComponent
  ],
})
export class CoreModule { }
