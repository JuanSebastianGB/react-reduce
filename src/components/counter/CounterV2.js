import { useReducer } from 'react';
import {
  counterReducer,
  counterInitialState,
  counterInit,
} from '../../reducers/counterReducer';
import { TYPES } from '../../actions/counterActions';

const CounterV2 = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    counterInitialState,
    counterInit
  );

  const add = () => dispatch({ type: TYPES.INCREMENT });
  const substract = () => dispatch({ type: TYPES.DECREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const substract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.ZERO });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter V2</h2>
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

export default CounterV2;
