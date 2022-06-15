import { useReducer } from 'react';

/* A constant that contains the action types. */
const TYPES = {
  INCREMENT: 'INCREMENT',
  INCREMENT_5: 'INCREMENT_5',
  DECREMENT: 'DECREMENT',
  DECREMENT_5: 'DECREMENT_5',
  ZERO: 'ZERO',
};

/**
 * It returns a new state object based on the action type
 * @param state - The current state of the store.
 * @param action - An object that contains the action type and any other data that the reducer needs to
 * update the state.
 * @returns The state is being returned.
 */
const reducer = (state, action) => {
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
      return { count: 0 };
    default:
      return state;
  }
};
const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => dispatch({ type: TYPES.INCREMENT });
  const substract = () => dispatch({ type: TYPES.DECREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const substract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.ZERO });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
        <button onClick={add5}>+5</button>
        <button onClick={substract5}>-5</button>
        <button onClick={reset}>0</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Counter;
