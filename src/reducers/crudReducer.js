import { TYPES } from '../actions/crudActions';

/* Setting the initial state of the reducer. */
export const crudInitialState = {
  db: null,
};

/**
 * It takes in a state and an action, and returns a new state based on the action type
 * @param state - the current state of the reducer
 * @param action - This is the action object that is dispatched from the component.
 * @returns The return value is the new state.
 */
export const crudReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case TYPES.DELETE_DATA: {
      return {
        ...state,
        db: state.db.filter(el => el.id !== action.payload),
      };
    }
    case TYPES.READ_ALL_DATA: {
      return {
        ...state,
        db: [...action.payload],
      };
    }
    case TYPES.READ_ONE_DATA: {
      return {};
    }
    case TYPES.UPDATE_DATA: {
      const updatedData = state.db.map(el =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: [...updatedData],
      };
    }
    case TYPES.NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
};
