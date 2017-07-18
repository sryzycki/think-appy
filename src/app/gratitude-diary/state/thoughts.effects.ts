import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { GratitudeDiaryService } from '../services/gratitude-diary.service';
import * as ThoughtsActions from './thoughts.actions';
import { Thought } from '../models/thought';

@Injectable()
export class ThoughtsEffects {
  @Effect()
  loadThoughtList$: Observable<Action> = this.actions$
    .ofType(ThoughtsActions.LOAD)
    .startWith(new ThoughtsActions.LoadAction())
    .switchMap(() => this.diaryService.getThoughts())
    .map((data: Thought[]) => new ThoughtsActions.LoadSuccessAction(data))
    .catch((error: any) => Observable.of(new ThoughtsActions.LoadErrorAction(error)));

  public constructor(
    private actions$: Actions,
    private diaryService: GratitudeDiaryService,
  ) {}
}
