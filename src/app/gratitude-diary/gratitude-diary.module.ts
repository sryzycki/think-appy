import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';

import { gratitudeDiaryReducerFractal, reducers } from './state/gratitude-diary.reducers';
import { ThoughtsEffects } from './state/thoughts.effects';
import { GratitudeDiaryService } from './services/gratitude-diary.service';
import { GratitudeDiaryComponent } from './containers/gratitude-diary/gratitude-diary.component';
import { GratitudeListComponent } from './components/gratitude-list/gratitude-list.component';
import { GratitudeFormComponent } from './components/gratitude-form/gratitude-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: GratitudeDiaryComponent,
  }
];

@NgModule({
  declarations: [
    GratitudeDiaryComponent,
    GratitudeListComponent,
    GratitudeFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
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
