import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';
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
        *ngIf="loadError$ | async as loadError"
        fxLayout="row"
        fxLayoutAlign="start center"
      >
        <md-icon color="warn">error</md-icon>&nbsp;<span>{{ loadError.message }}</span>
      </div>

      <app-gratitude-form
        [text]="thoughtText"
        (added)="onAddedThought($event)"
      ></app-gratitude-form>
    </md-card>
  `
})
export class GratitudeDiaryComponent implements OnInit {
  thoughtText = Observable.of('');
  isLoading$: Observable<boolean> = this.store.select(fromGratitudeDiaryReducers.getThoughtLoadingStatus);
  loadError$: Observable<FirebaseError> = this.store.select(fromGratitudeDiaryReducers.getThoughtLoadError);
  thoughtList$: Observable<Thought[]> = this.store.select(fromGratitudeDiaryReducers.getThoughtList);

  public constructor(
    private store: Store<fromGratitudeDiaryReducers.State>,
  ) {}

  public ngOnInit() {
    this.store.dispatch(new fromThoughtsActions.LoadAction());
  }

  public onThoughtDeleted(item: Thought) {
    this.store.dispatch(new fromThoughtsActions.DeleteThoughtAction(item))
  }

  public onAddedThought(event: string) {
    this.store.dispatch(new fromThoughtsActions.CreateThoughtAction(event));
    this.thoughtText = Observable.of('');
  }
}
