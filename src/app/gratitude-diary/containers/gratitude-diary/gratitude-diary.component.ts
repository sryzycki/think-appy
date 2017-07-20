import { Component, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromGratitudeDiaryReducers from '../../state/gratitude-diary.reducers';
import * as fromThoughtsActions from '../../state/thoughts.actions';
import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-diary',
  styleUrls: ['./gratitude-diary.component.scss'],
  template: `
    <md-toolbar
      class="toolbar"
      color="primary"
    >
      Gratitude list
    </md-toolbar>

    <md-card>
      <app-gratitude-list
        [items]="thoughtList | async"
        (thoughtSubmitted)="createThought($event)"
      ></app-gratitude-list>

      <md-input-container class="input-container">
        <input
          placeholder="Type in your happy thought here"
          #newThought
          mdInput
        />
      </md-input-container>
      <button
        class="button"
        type="button"
        md-raised-button
        color="primary"
        [disabled]="newThought.value.length < 1"
        (click)="createThought(newThought.value)"
      >Add</button>
    </md-card>
  `
})
export class GratitudeDiaryComponent {
  @ViewChild('newThought')
  newThought: ElementRef;
  thoughtList: Observable<Thought[]> = this.store.select(fromGratitudeDiaryReducers.getThoughtList);

  constructor(
    private store: Store<fromGratitudeDiaryReducers.State>,
  ) {}

  createThought(text: string): void {
    this.store.dispatch(new fromThoughtsActions.CreateThoughtAction(text));
    this.newThought.nativeElement.value = '';
  }
}
