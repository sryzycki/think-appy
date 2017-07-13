import { Action } from '@ngrx/store';

import { Thought } from '../models/thought';

export const LOAD =                    '[Thoughts] Load';
export const LOAD_SUCCESS =            '[Thoughts] Load success';
export const ADD =                    '[Thoughts] Add';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Thought[]) {}
}

export class Add implements Action {
  readonly type = ADD;

  constructor(public payload: string) {}
}

export type All
  = Load
  | LoadSuccess
  | Add;
