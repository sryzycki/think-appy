import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app',
  styleUrls: ['./app.component.scss'],
  template: `
    <md-toolbar>Positives App</md-toolbar>
  `
})
export class AppComponent { }
