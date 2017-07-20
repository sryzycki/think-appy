import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-header',
  styleUrls: ['./page-header.component.scss'],
  template: `
    <md-toolbar color="primary">
      <ng-content></ng-content>
    </md-toolbar>
  `
})
export class PageHeaderComponent {}
