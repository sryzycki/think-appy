import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { GratitudeDiaryService } from './services/gratitude-diary.service';
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
  providers: [
    GratitudeDiaryService,
  ],
})
export class GratitudeDiaryModule { }
