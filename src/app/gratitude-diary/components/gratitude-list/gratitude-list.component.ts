import {
  Component,
  ChangeDetectionStrategy,
  Input, Output, EventEmitter,
} from '@angular/core';

import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-list',
  styleUrls: ['./gratitude-list.component.scss'],
  template: `
    <md-list>
      <md-list-item *ngFor="let item of items; index as i">
        <div
          fxLayout="row"
          fxLayoutAlign="center center"
          style="width: 100%"
        >
          <b>{{ i + 1 }}.&nbsp;</b>{{ item.text }}
          <span fxFlex="grow"></span>
          <button
            md-button
            (click)="delete(item)"
          >Delete</button>
        </div>
      </md-list-item>
    </md-list>
  `
})
export class GratitudeListComponent {
  @Input()
  items: Thought[];
  @Output()
  deleted: EventEmitter<Thought> = new EventEmitter<Thought>();

  public delete(item: Thought) {
    this.deleted.emit(item);
  }
}
