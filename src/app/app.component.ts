import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="mat-typography">
      <md-toolbar color="primary">Think appy</md-toolbar>
      <br />
      <div class="content-wrapper">
        <app-gratitude-diary></app-gratitude-diary>
      </div>
    </div>
  `
})
export class AppComponent { }
