import * as ThoughtsActions from './thoughts.actions';
import { Thought } from '../models/thought';

export interface State {
  list: Thought[],
}

const initialState: State = {
  list: [],
};

export function reducer(state: State, action: ThoughtsActions.All): State {
  switch (action.type) {
    case ThoughtsActions.LOAD_SUCCESS:
      return {
        ...state,
        list: action.payload as Thought[],
      };
    case ThoughtsActions.ADD:
      const previousId: string = state.list[state.list.length - 1].id;
      const id: string = (parseInt(previousId, 10) + 1).toString();
      const text: string = action.payload as string;

      return {
        ...state,
        list: [
          ...state.list,
          { id, text },
        ],
      };
    default:
      return state;
  }
}

/**
 * Selectors.
 */
export const getList = (state: State): Thought[] => state.list;
