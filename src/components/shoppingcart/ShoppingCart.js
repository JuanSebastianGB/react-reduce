import { useReducer } from 'react';
import { TYPES } from '../../actions/shoppingActions';
import ProductItem from '../productitem/ProductItem';
import ProductCart from '../productcart/ProductCart';
import {
  shoppingInitialState,
  shoppingReducer,
} from '../../reducers/shoppingReducer';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const showTotal = () => {
    dispatch({ type: TYPES.SHOW_TOTAL });
  };

  /**
   * `addToCart` is a function that dispatches an action to the reducer
   */
  const addToCart = id => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  /**
   * `delFromCart` is a function that dispatches an action to the reducer to
   * remove an item from the cart
   */
  const delFromCart = (id, all = false) => {
    dispatch({
      type: all ? TYPES.REMOVE_ALL_FROM_CART : TYPES.REMOVE_FROM_CART,
      payload: id,
    });
  };
  /**
   * `clearCart` is a function that dispatches an action to the reducer to
   * remove all items from the cart
   */
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Products</h3>
      <article className='box grid-responsive'>
        {products.map(data => (
          <ProductItem
            key={data.id}
            data={data}
            addToCart={addToCart}
          />
        ))}
      </article>
      <button onClick={() => showTotal()}>Show Total</button>
      <h3>Total products: {state.totalProducts}</h3>
      <h3>Total Price: ${state.totalPrice}.00</h3>
      <article className='box'>
        <button onClick={() => clearCart()}>Clear Cart</button>
        <h3>
          {cart.map(data => (
            <ProductCart
              key={data.id}
              data={data}
              delFromCart={delFromCart}
              clearCart={clearCart}
            />
          ))}
        </h3>
      </article>
    </div>
  );
};

export default ShoppingCart;
