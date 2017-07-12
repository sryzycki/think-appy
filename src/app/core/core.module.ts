import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdListModule,
  MdToolbarModule,
} from '@angular/material';

const CORE_MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  MdListModule,
  MdToolbarModule,
];

@NgModule({
  exports: CORE_MODULES,
  imports: CORE_MODULES,
})
export class CoreModule { }
