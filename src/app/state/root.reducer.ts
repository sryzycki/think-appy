import * as fromThoughts from '../gratitude-diary/state/thoughts.reducer';

export interface State {
  thoughts: fromThoughts.State,
}

export const reducers = {
  thoughts: fromThoughts.reducer,
};

export const getThoughtList = (state: State) => state.thoughts.list;
