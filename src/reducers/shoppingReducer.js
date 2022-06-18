/* eslint-disable no-fallthrough */
/* eslint-disable no-empty */
import { TYPES } from '../actions/shoppingActions';

/* Creating an object with two properties, products and cart. */
export const shoppingInitialState = {
  products: [
    { id: 1, name: 'Product 1', price: '$10.00' },
    { id: 2, name: 'Product 2', price: '$20.00' },
    { id: 3, name: 'Product 3', price: '$30.00' },
    { id: 4, name: 'Product 4', price: '$40.00' },
    { id: 5, name: 'Product 5', price: '$50.00' },
    { id: 6, name: 'Product 6', price: '$60.00' },
    { id: 7, name: 'Product 7', price: '$70.00' },
  ],
  cart: [],
};

/**
 * It takes in a state and an action, and returns a new state
 * @param shoppingInitialState - This is the initial state of the shopping cart.
 * @param action - This is the action object that was dispatched.
 * @returns The shoppingReducer is being returned.
 */
export const shoppingReducer = (shoppingInitialState, action) => {
  switch (action.TYPE) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return shoppingInitialState;
  }
};
