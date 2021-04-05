import axios from 'axios';
import actionTypes from './actionTypes';
import SERVER from '../../constants/server';
import { User, Product, ShoppingCart } from '../../models/initiaState';
import { Dispatch } from 'redux';

export function addProductToFavourite (product:Product, user:User, favouriteState:boolean) {
  let newUser;
  favouriteState
    ? newUser = { ...user, favourite: [...user.favourite, product] }
    : newUser = { ...user, favourite: user.favourite.filter(elem => elem._id !== product._id) };

  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${SERVER.URL_USER}/${user._id}`, newUser);
    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_FAVOURITE,
      data
    });
  };
}

export function register (email:string, name:string, password:string) {
  const query = { email, name, password };
  let actionObj;
  return async (dispatch:Dispatch) => {
    try {
      const { data, status } = await axios.post(SERVER.URL_REGISTER, query);
      actionObj = {
        type: actionTypes.REGISTER,
        data,
        status
      };
    } catch (error) {
      actionObj = {
        type: actionTypes.REGISTER_ERROR
      };
    }
    dispatch(
      actionObj
    );
  };
}

export function login (email:string, password:string) {
  const query = { email, password };

  return async (dispatch:Dispatch) => {
    let actionObj;
    try {
      const { data } = await axios.post(SERVER.URL_LOGIN, query);
      actionObj = {
        type: actionTypes.LOGIN,
        data

      };
    } catch (error) {
      actionObj = {
        type: actionTypes.LOGIN_ERROR
      };
    }

    dispatch(actionObj);
  };
}

export function logout (email:string, password:string) {
  const query = { email, password };

  return async (dispatch:Dispatch) => {
    const { data } = await axios.post(SERVER.URL_LOGOUT, query);

    dispatch({
      type: actionTypes.LOGOUT,
      data
    });
  };
}

export function cleanIsExistStatus () {
  return {
    type: actionTypes.CLEAN_ISEXIST_STATUS
  };
}

export function cleanLoginError () {
  return {
    type: actionTypes.CLEAN_LOGIN_ERROR
  };
}

export function cleanRegisted () {
  return {
    type: actionTypes.CLEAN_REGISTED
  };
}

export function removeFavourite (product:Product, user:User) {
  const newUser = { ...user, favourite: user.favourite.filter(elem => elem._id !== product._id) };

  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${SERVER.URL_USER}/${user._id}`, newUser);
    dispatch({
      type: actionTypes.REMOVE_FAVOURITE,
      data
    });
  };
}

export function updateAddress (street:string,
  city:string, country:string, postcode:string, user:User) {
  const query = { street, city, country, postcode };
  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${SERVER.URL_USER}/${user._id}`, { address: query });
    dispatch({
      type: actionTypes.UPDATE_USER,
      data
    });
  };
}

export function updateCard (cardNumber:string, securtyCode:string, cardholder:string, expiryDate:string, user:User) {
  const query = { cardNumber, securtyCode, cardholder, expiryDate };
  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${SERVER.URL_USER}/${user._id}`, { card: query });
    dispatch({
      type: actionTypes.UPDATE_USER,
      data
    });
  };
}

export function paymentSuccessfuly (user:User, cart:ShoppingCart) {
  return async (dispatch:Dispatch) => {
    const { data } = await axios.put(`${SERVER.URL_USER}/${user._id}`, { orderHistory: [...user.orderHistory, cart] });
    dispatch({
      type: actionTypes.PAYMENT_SUCCSSFULY,
      data
    });
  };
}
