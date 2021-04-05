import { combineReducers } from 'redux';
import productsType from './productsTypeReducer';
import products from './productsReducer';
import cart from './cartReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  productsType,
  products,
  cart,
  user
});

export default rootReducer;
