import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function cart (state = initialState.cart, action:AnyAction) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART: {
      const index = state.cartList.findIndex((product) => product._id === action.product._id);
      if (index === -1) {
        const newProduct = { ...action.product };
        newProduct.quantity = 1;
        newProduct.stock -= 1;
        const totalValue = state.cartList.reduce((acc, product) => (acc + product.cost.value), newProduct.cost.value);
        return { ...state, cartList: [...state.cartList, newProduct], totalCost: totalValue };
      }
      const newState = state.cartList.map((product) => {
        if (product._id === action.product._id) {
          const productTotalCost = product.cost.value + action.product.cost.value;
          return { ...action.product, quantity: product.quantity + 1, stock: product.stock - 1, cost: { ...product.cost, value: productTotalCost } };
        }
        return product;
      });
      const totalValue = newState.reduce((acc, product) => (acc + product.cost.value), 0);
      return { ...state, cartList: newState, totalCost: totalValue };
    }

    case actionTypes.INCREASE_QUANTITY_CART: {
      const newState = state.cartList.map((product) => {
        if (product._id === action.productId) {
          const productTotalCost = product.cost.value + product.cost.value / product.quantity;
          return { ...product, quantity: product.quantity + 1, stock: product.stock - 1, cost: { ...product.cost, value: productTotalCost } };
        }
        return product;
      });
      const cartTotalCost = newState.reduce((acc, product) => acc + product.cost.value, 0);
      return { ...state, cartList: newState, totalCost: cartTotalCost };
    }

    case actionTypes.DECREASE_QUANTITY_CART: {
      const newState = state.cartList.map((product) => {
        if (product._id === action.productId) {
          const productTotalCost = product.cost.value - product.cost.value / product.quantity;
          return { ...product, quantity: product.quantity - 1, stock: product.stock + 1, cost: { ...product.cost, value: productTotalCost } };
        }
        return product;
      });
      const cartTotalCost = newState.reduce((acc, product) => acc + product.cost.value, 0);
      return { ...state, cartList: newState, totalCost: cartTotalCost };
    }

    case actionTypes.DELETE_PRODUCT_CART: {
      const newState = state.cartList.filter((item) => item._id !== action.productId);
      const cartTotalCost = newState.reduce((acc, product) => acc + product.cost.value, 0);
      return { ...state, cartList: newState, totalCost: cartTotalCost };
    }

    case actionTypes.PAYMENT_SUCCSSFULY:
      return { cartList: [], totalCost: 0 };

    default: return state;
  }
}
