import { Action } from '@ngrx/store';

import { Thought } from '../models/thought';

export const LOAD =                    '[Thoughts] Load';
export const LOAD_SUCCESS =            '[Thoughts] Load success';
export const LOAD_ERROR =              '[Thoughts] Load error';
export const CREATE_THOUGHT =          '[Thoughts] Create thought';
export const CREATE_THOUGHT_SUCCESS =  '[Thoughts] Create thought success';
export const CREATE_THOUGHT_ERROR =    '[Thoughts] Create thought error';

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

export class CreateThoughtAction implements Action {
  readonly type = CREATE_THOUGHT;

  constructor(public payload: string) {}
}

export class CreateThoughtSuccessAction implements Action {
  readonly type = CREATE_THOUGHT_SUCCESS;

  constructor(public payload: Thought) {}
}

export class CreateThoughtErrorAction implements Action {
  readonly type = CREATE_THOUGHT_ERROR;

  constructor(public payload: any) {}
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadErrorAction
  | CreateThoughtAction
  | CreateThoughtSuccessAction
  | CreateThoughtErrorAction;
