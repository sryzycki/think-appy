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
    <md-list>
      <md-list-item *ngFor="let item of items; index as i">
        <b>{{ i + 1 }}.&nbsp;</b>{{ item.text }}
      </md-list-item>
    </md-list>
  `
})
export class GratitudeListComponent {
  @Input()
  items: Thought[];
}
