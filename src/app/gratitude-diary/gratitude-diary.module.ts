import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';

import { GratitudeDiaryService } from './services/gratitude-diary.service';
import { GratitudeDiaryComponent } from './containers/gratitude-diary/gratitude-diary.component';
import { GratitudeListComponent } from './components/gratitude-list/gratitude-list.component';
import { ThoughtsEffects } from './state/thoughts.effects';
import { gratitudeDiaryReducerFractal, reducers } from './state/gratitude-diary.reducers';

@NgModule({
  declarations: [
    GratitudeDiaryComponent,
    GratitudeListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature(gratitudeDiaryReducerFractal, reducers),
    EffectsModule.forFeature([
      ThoughtsEffects,
    ]),
  ],
  exports: [
    GratitudeDiaryComponent,
  ],
  providers: [
    GratitudeDiaryService
  ],
})
export class GratitudeDiaryModule {}
