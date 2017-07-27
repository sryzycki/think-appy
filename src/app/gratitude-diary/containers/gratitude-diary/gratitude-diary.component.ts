import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FirebaseError } from 'firebase/app';

import * as fromGratitudeDiaryReducers from '../../state/gratitude-diary.reducers';
import * as fromThoughtsActions from '../../state/thoughts.actions';
import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-diary',
  styleUrls: ['./gratitude-diary.component.scss'],
  template: `
    <app-page-header>
      Gratitude list
    </app-page-header>

    <md-card>
      <md-progress-bar
        *ngIf="isLoading$ | async"
        mode="indeterminate"
      ></md-progress-bar>
      <app-gratitude-list
        [items]="thoughtList$ | async"
        (deleted)="onThoughtDeleted($event)"
      ></app-gratitude-list>
      <div
        *ngIf="loadError$ | async"
        fxLayout="row"
        fxLayoutAlign="start center"
      >
        <md-icon color="warn">error</md-icon>&nbsp;<span>{{ (loadError$ | async)?.message }}</span>
      </div>

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
export class GratitudeDiaryComponent implements OnInit {
  @ViewChild('newThought')
  newThought: ElementRef;
  isLoading$: Observable<boolean> = this.store.select(fromGratitudeDiaryReducers.getThoughtLoadingStatus);
  loadError$: Observable<FirebaseError> = this.store.select(fromGratitudeDiaryReducers.getThoughtLoadError);
  thoughtList$: Observable<Thought[]> = this.store.select(fromGratitudeDiaryReducers.getThoughtList);

  constructor(
    private store: Store<fromGratitudeDiaryReducers.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromThoughtsActions.LoadAction());
  }

  createThought(text: string): void {
    this.store.dispatch(new fromThoughtsActions.CreateThoughtAction(text));
    this.newThought.nativeElement.value = '';
  }

  onThoughtDeleted(item: Thought) {
    this.store.dispatch(new fromThoughtsActions.DeleteThoughtAction(item))
  }
}
