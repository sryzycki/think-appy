import { Action } from '@ngrx/store';

import { Thought } from '../models/thought';

export const LOAD =                    '[Thoughts] Load';
export const LOAD_SUCCESS =            '[Thoughts] Load success';
export const LOAD_ERROR =              '[Thoughts] Load error';
export const ADD =                     '[Thoughts] Add';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Thought[]) {}
}

export class LoadErrorAction implements Action {
  readonly type = LOAD_ERROR;

  constructor(public payload: any) {}
}

export class AddAction implements Action {
  readonly type = ADD;

  constructor(public payload: string) {}
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadErrorAction
  | AddAction;
