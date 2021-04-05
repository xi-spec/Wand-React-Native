import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function user (state = initialState.user, action:AnyAction) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_FAVOURITE:
      return { ...action.data, isLogged: true };

    case actionTypes.REMOVE_FAVOURITE:
      return { ...action.data, isLogged: true };

    case actionTypes.CLEAN_ISEXIST_STATUS:
      return { ...state, isExist: false };

    case actionTypes.REGISTER:
      return action.status === 300
        ? { ...state, isExist: true }
        : { ...action.data, isRegisted: true, isExist: false };

    case actionTypes.REGISTER_ERROR:
      return { ...state, isExist: true };

    case actionTypes.LOGIN:
      return { ...action.data, isLogged: true, loginError: false };

    case actionTypes.LOGIN_ERROR:
      return { ...state, loginError: true };

    case actionTypes.CLEAN_LOGIN_ERROR:
      return { ...state, loginError: false };

    case actionTypes.CLEAN_REGISTED:
      return { ...state, isRegisted: false };

    case actionTypes.UPDATE_USER:
      return { ...action.data, isLogged: true };

    case actionTypes.PAYMENT_SUCCSSFULY:
      return { ...action.data, isLogged: true };

    default: return state;
  }
}
