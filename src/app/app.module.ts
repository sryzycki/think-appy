import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { GratitudeDiaryModule } from './gratitude-diary/gratitude-diary.module';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    GratitudeDiaryModule,
  ],
  providers: [],
})
export class AppModule { }
