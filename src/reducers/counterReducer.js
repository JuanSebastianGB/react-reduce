import { TYPES } from '../actions/counterActions';

/* Setting the initial state of the counter. */
export const counterInitialState = { count: 0 };
/**
 * It takes an initial state and returns a new state with the count incremented by 100.
 * @returns An object with a count property that is equal to the initialState.count + 100.
 */
export const counterInit = initialState => {
  return { count: initialState.count + 100 };
};
/**
 * It returns a new state object based on the action type
 * @param state - The current state of the store.
 * @param action - An object that contains the action type and any other
 * data that the reducer needs to
 * update the state.
 * @returns The state is being returned.
 */
export const counterReducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.ZERO:
      return counterInitialState;
    default:
      return state;
  }
};
