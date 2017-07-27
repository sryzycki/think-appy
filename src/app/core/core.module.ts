import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdToolbarModule,
} from '@angular/material';

import { PageHeaderComponent } from './components/page-header/page-header.component';

const CORE_MODULES = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  MdButtonModule,
  MdCardModule,
  MdIconModule,
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
