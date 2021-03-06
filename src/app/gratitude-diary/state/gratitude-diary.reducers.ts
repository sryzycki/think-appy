import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromThoughtsReducer from './thoughts.reducer';

export const gratitudeDiaryReducerFractal = 'gratitudeDiary';

export interface State {
  thoughts: fromThoughtsReducer.State,
}

export const reducers = {
  thoughts: fromThoughtsReducer.reducer,
};

export const getFractalState = createFeatureSelector<State>(gratitudeDiaryReducerFractal);

export const getThoughtsState = createSelector(getFractalState, (state: State) => state.thoughts);

export const getThoughtList = createSelector(getThoughtsState, fromThoughtsReducer.getList);

export const getThoughtLoadingStatus = createSelector(getThoughtsState, fromThoughtsReducer.getIsLoading);

export const getThoughtLoadError = createSelector(getThoughtsState, fromThoughtsReducer.getLoadError);
