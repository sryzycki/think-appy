import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="mat-typography">
      <md-toolbar>Think appy</md-toolbar>
      <app-gratitude-diary></app-gratitude-diary>
    </div>
  `
})
export class AppComponent { }
