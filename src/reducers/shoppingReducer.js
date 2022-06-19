import { TYPES } from '../actions/shoppingActions';

/* Creating an object with two properties, products and cart. */
export const shoppingInitialState = {
  products: [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', price: 30.0 },
    { id: 4, name: 'Product 4', price: 40.0 },
    { id: 5, name: 'Product 5', price: 50.0 },
    { id: 6, name: 'Product 6', price: 60.0 },
    { id: 7, name: 'Product 7', price: 70.0 },
  ],
  cart: [],
  totalProducts: 0,
  totalPrice: 0,
};

/**
 * It takes in a state and an action, and returns a new state
 * @param state - This is the initial state of the shopping cart.
 * @param action - This is the action object that was dispatched.
 * @returns The shoppingReducer is being returned.
 */
export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SHOW_TOTAL:
      return {
        ...state,
        totalProducts: state.cart.reduce((acc, curr) => acc + curr.quantity, 0),
        totalPrice: state.cart.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        ),
      };
    case TYPES.ADD_TO_CART: {
      const newItemToAddToCart = state.products.find(
        item => item.id === action.payload
      );
      const itemInCart = state.cart.find(
        item => item.id === newItemToAddToCart.id
      );
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === newItemToAddToCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItemToAddToCart, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_FROM_CART: {
      const itemToRemove = state.cart.find(item => item.id === action.payload);
      return itemToRemove.quantity === 1
        ? {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          }
        : {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
};
