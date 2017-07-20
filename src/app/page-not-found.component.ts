import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-not-found',
  template: `
    <app-page-header>
      Ooops!
    </app-page-header>

    <md-card>
      Where were we...?
    </md-card>
  `
})
export class PageNotFoundComponent {}
