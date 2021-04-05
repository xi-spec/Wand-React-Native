import actionTypes from './actionTypes';
import axios from 'axios';
import SERVER from '../../constants/server';
import { Dispatch } from 'redux';
import { Product, ShoppingCart } from '../../models/initiaState';

export function loadProductsType () {
  return async (dispatch : Dispatch) => {
    const { data } = await axios.get(SERVER.URL_TYPE);
    dispatch({
      type: actionTypes.LOAD_PRODUCT_TYPE,
      data
    });
  };
}

export function loadAllProducts () {
  return async (dispatch : Dispatch) => {
    const { data } = await axios.get(SERVER.URL_PRODUCT);
    dispatch({
      type: actionTypes.LOAD_ALL_PRODUCTS,
      data
    });
  };
}

export function loadProductsList (typeName:string) {
  return {
    type: actionTypes.LOAD_PRODUCTS_LIST,
    typeName
  };
}

export function loadProductDetail (productId:string) {
  return {
    type: actionTypes.LOAD_PRODUCT_DETAIL,
    productId
  };
}

export function addProductToCart (product:Product) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product
  };
}

export function increaseQuantityCart (productId:string) {
  return {
    type: actionTypes.INCREASE_QUANTITY_CART,
    productId
  };
}

export function decreaseQuantityCart (productId:string) {
  return {
    type: actionTypes.DECREASE_QUANTITY_CART,
    productId
  };
}

export function deleteProductCart (productId:string, quantity:number) {
  return {
    type: actionTypes.DELETE_PRODUCT_CART,
    productId,
    quantity
  };
}

export function searchProducts (name:string) {
  return {
    type: actionTypes.SEARCH_PRODUCT,
    name
  };
}

export function updateStockApi (cart:ShoppingCart) {
  return (dispatch : Dispatch) => {
    cart.cartList.forEach(async (product) => {
      const { data } = await axios.put(`${SERVER.URL_PRODUCT}/${product._id}`, { stock: product.stock });
      dispatch({
        type: actionTypes.UPDATE_STOCK_API,
        data
      });
    });
  };
}
