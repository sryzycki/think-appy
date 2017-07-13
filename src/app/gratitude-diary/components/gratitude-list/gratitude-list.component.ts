import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-list',
  styleUrls: ['./gratitude-list.component.scss'],
  template: `
    <h1>
      Gratitude list
    </h1>
    <md-list>
      <md-list-item *ngFor="let item of items">
        {{ item.text }}
      </md-list-item>
    </md-list>
  `
})
export class GratitudeListComponent {
  @Input()
  items: Thought[];
}
