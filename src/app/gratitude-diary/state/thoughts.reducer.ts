import * as ThoughtsActions from './thoughts.actions';
import { Thought } from '../models/thought';

export interface State {
  isLoading: boolean,
  loaded: boolean,
  list: Thought[],
}

const initialState: State = {
  isLoading: false,
  loaded: false,
  list: [],
};

export function reducer(state: State = initialState, action: ThoughtsActions.Actions): State {
  switch (action.type) {
    case ThoughtsActions.LOAD:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ThoughtsActions.LOAD_SUCCESS:
      const thoughtList: Thought[] = action.payload;

      return {
        ...state,
        isLoading: false,
        loaded: true,
        list: thoughtList,
      };
    case ThoughtsActions.ADD:
      const previousItem: Thought | undefined = state.list[state.list.length - 1];
      const previousId: string = previousItem && previousItem.id || '-1';

      const newThoughtId: string = (parseInt(previousId, 10) + 1).toString();
      const newThoughtText: string = action.payload;

      return Object.assign({}, state, {
        list: [
          ...state.list,
          {
            id: newThoughtId,
            text: newThoughtText,
          },
        ],
      });
    default:
      return state;
  }
}

/**
 * Selectors.
 */
export const getList = (state: State): Thought[] => state.list;
