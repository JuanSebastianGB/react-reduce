import './App.css';
import Counter from './components/counter/Counter';
import CounterV2 from './components/counter/CounterV2';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import CrudApi from './components/crudapi/CrudApi';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <CounterV2 />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
