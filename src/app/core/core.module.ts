import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdToolbarModule,
} from '@angular/material';

import { PageHeaderComponent } from './components/page-header/page-header.component';

const CORE_MODULES = [
  CommonModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
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
