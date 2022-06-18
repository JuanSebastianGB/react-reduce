import './App.css';
import Counter from './components/counter/Counter';
import CounterV2 from './components/counter/CounterV2';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <ShoppingCart />
      <hr />
      <CounterV2 />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
