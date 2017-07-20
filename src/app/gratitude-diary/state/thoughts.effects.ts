import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import * as fromThoughtsActions from './thoughts.actions';
import { Thought } from '../models/thought';
import { GratitudeDiaryService } from '../services/gratitude-diary.service';

@Injectable()
export class ThoughtsEffects {
  @Effect()
  loadThoughtList$: Observable<Action> = this.actions$
    .ofType(fromThoughtsActions.LOAD)
    .startWith(new fromThoughtsActions.LoadAction())
    .switchMap(() => {
      return this.diaryService
        .fetchThoughts()
        .map((data: Thought[]) => new fromThoughtsActions.LoadSuccessAction(data))
        .catch((error: any) => Observable.of(new fromThoughtsActions.LoadErrorAction(error)))
    });

  @Effect()
  createThought$: Observable<Action> = this.actions$
    .ofType(fromThoughtsActions.CREATE_THOUGHT)
    .map((action: fromThoughtsActions.CreateThoughtAction) => action.payload)
    .switchMap((thoughtText: string) => {
      return this.diaryService
        .createThought(thoughtText)
        .map((thought: Thought) => new fromThoughtsActions.CreateThoughtSuccessAction(thought))
        .catch((error: any) => Observable.of(new fromThoughtsActions.CreateThoughtErrorAction(error)));
    });

  public constructor(
    private actions$: Actions,
    private diaryService: GratitudeDiaryService,
  ) {}
}
