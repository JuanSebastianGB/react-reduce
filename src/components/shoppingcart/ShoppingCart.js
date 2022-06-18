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

  /**
   * `addToCart` is a function that dispatches an action to the reducer
   */
  const addToCart = id => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART });
  };
  /**
   * `delFromCart` is a function that dispatches an action to the reducer to
   * remove an item from the cart
   */
  const delFromCart = () => {
    console.log('removing...');
    dispatch({ type: TYPES.REMOVE_FROM_CART });
  };
  /**
   * `clearCart` is a function that dispatches an action to the reducer to
   * remove all items from the cart
   */
  const clearCart = () => {
    console.log('clearing...');
    dispatch({ type: TYPES.REMOVE_FROM_CART });
  };

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Products</h3>
      <article className='box grid-responsive'>
        {products.map((data, key) => (
          <ProductItem
            key={key}
            data={data}
            addToCart={addToCart}
            delFromCart={delFromCart}
            clearCart={clearCart}
          />
        ))}
      </article>
      <h3></h3>
      <article className='box'>
        <h3>
          {cart.length > 0 &&
            cart.map((data, key) => (
              <ProductCart
                key={key}
                data={data}
              />
            ))}
        </h3>
      </article>
    </div>
  );
};

export default ShoppingCart;
