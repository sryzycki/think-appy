import { Component, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromGratitudeDiaryReducers from '../../state/gratitude-diary.reducers';
import * as ThoughtsActions from '../../state/thoughts.actions';
import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-diary',
  styleUrls: ['./gratitude-diary.component.scss'],
  template: `
    <app-gratitude-list
      [items]="thoughtList | async"
      (thoughtSubmitted)="createThought($event)"
    ></app-gratitude-list>

    <br />
    <hr />
    <br />

    <md-input-container>
      <input
        style="width: 250px;"
        placeholder="Your new happy thought"
        #newThought
        mdInput
      />
    </md-input-container>
    <br />
    <button
      type="button"
      style="width: 250px;"
      md-raised-button
      md-primary
      [disabled]="newThought.value.length < 1"
      (click)="createThought(newThought.value)"
    >Add</button>
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
    this.store.dispatch(new ThoughtsActions.AddAction(text));
    this.newThought.nativeElement.value = '';
  }
}
