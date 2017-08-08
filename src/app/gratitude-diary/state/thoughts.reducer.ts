import { FirebaseError } from 'firebase/app';

import * as fromThoughtsActions from './thoughts.actions';
import { Thought } from '../models/thought';

export interface State {
  isLoading: boolean,
  loaded: boolean,
  loadError?: FirebaseError,
  list: Thought[],
}

const initialState: State = {
  isLoading: false,
  loaded: false,
  list: [],
};

export function reducer(
  state: State = initialState,
  action: fromThoughtsActions.Actions,
): State {
  switch (action.type) {
    case fromThoughtsActions.LOAD:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case fromThoughtsActions.LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        loaded: true,
        list: action.payload,
      });

    case fromThoughtsActions.LOAD_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        loadError: action.payload,
      });

    case fromThoughtsActions.CREATE_THOUGHT:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case fromThoughtsActions.CREATE_THOUGHT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: [
          ...state.list,
          action.payload,
        ],
      });

    case fromThoughtsActions.DELETE_THOUGHT:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case fromThoughtsActions.DELETE_THOUGHT_SUCCESS:
      const deletedThought: Thought = action.payload;
      const newList = state.list.filter((item: Thought) => deletedThought.id !== item.id);

      return Object.assign({}, state, {
        isLoading: false,
        list: newList,
      });

    default:
      return state;
  }
}

/**
 * Selectors.
 */
export const getList = (state: State): Thought[] => state.list;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getLoadError = (state: State): FirebaseError|undefined => state.loadError;
