import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { GratitudeDiaryComponent } from './containers/gratitude-diary/gratitude-diary.component';
import { GratitudeListComponent } from './components/gratitude-list/gratitude-list.component';

@NgModule({
  declarations: [
    GratitudeDiaryComponent,
    GratitudeListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    GratitudeDiaryComponent,
  ],
})
export class GratitudeDiaryModule { }
