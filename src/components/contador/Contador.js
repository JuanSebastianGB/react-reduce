import { useReducer } from 'react';

/**
 * It returns a new state object based on the action type
 * @param state - The current state of the store.
 * @param action - An object that contains the action type and any other data that the reducer needs to
 * update the state.
 * @returns The state is being returned.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const initialState = { count: 0 };

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = () => dispatch({ type: 'INCREMENT' });
  const substract = () => dispatch({ type: 'DECREMENT' });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
