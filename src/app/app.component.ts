import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="mat-typography">
      <md-toolbar color="primary">
        <span class="logo" routerLink="/">Think appy</span>
      </md-toolbar>
      <br />
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent { }
