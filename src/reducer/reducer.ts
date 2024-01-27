import { ActionType } from './actions';

export const initalState = {
  age: 20
};

export const init = (initArgState: typeof initalState) => {
  return { ...initArgState, age: initArgState.age + 4 };
};

const reducer = (state: typeof initalState, action: ActionType) => {
  switch (action.type) {
    case 'increase_age':
      return { ...state, age: state.age + 1 };
    case 'decrease_age':
      return { ...state, age: state.age - 1 };
    case 'increase_xAge':
      return { ...state, age: state.age + action.payload };

    default:
      throw Error(`Invalid Action ${action}`);
  }
};

export default reducer;
