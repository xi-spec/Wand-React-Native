import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function productsType (state = initialState.productsType, action:AnyAction) {
  return action.type === actionTypes.LOAD_PRODUCT_TYPE ? action.data : state;
}
