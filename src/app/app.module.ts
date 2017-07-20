import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';
import { reducers } from './state/root.reducer';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gratitude-diary',
  },
  {
    path: 'gratitude-diary',
    loadChildren: './gratitude-diary/gratitude-diary.module#GratitudeDiaryModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoreModule,
  ],
  providers: [],
})
export class AppModule { }
