import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function products (state = initialState.products, action:AnyAction) {
  let newState;
  let productDetail;
  switch (action.type) {
    case actionTypes.LOAD_ALL_PRODUCTS:
      return { ...state, allProducts: action.data };

    case actionTypes.LOAD_PRODUCTS_LIST:
      if (action.typeName === 'All products') {
        return { ...state, productsList: state.allProducts };
      } else {
        newState = state.allProducts.filter((product) => product.type.name === action.typeName);
        return { ...state, productsList: newState };
      }

    case actionTypes.LOAD_PRODUCT_DETAIL:
      productDetail = state.allProducts.find(product => product._id === action.productId);
      return { ...state, selectedProduct: productDetail };

    case actionTypes.ADD_PRODUCT_TO_CART: {
      newState = state.allProducts.map(product => {
        if (product._id === action.product._id) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      });
      productDetail = newState.find(product => product._id === action.product._id);
      return { ...state, allProducts: newState, selectedProduct: productDetail };
    }

    case actionTypes.INCREASE_QUANTITY_CART: {
      newState = state.allProducts.map((product) => {
        if (product._id === action.productId) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      });
      return { ...state, allProducts: newState };
    }

    case actionTypes.DECREASE_QUANTITY_CART: {
      newState = state.allProducts.map((product) => {
        if (product._id === action.productId) {
          return { ...product, stock: product.stock + 1 };
        }
        return product;
      });
      return { ...state, allProducts: newState };
    }

    case actionTypes.DELETE_PRODUCT_CART: {
      newState = state.allProducts.map((product) => {
        if (product._id === action.productId) {
          return { ...product, stock: product.stock + action.quantity };
        }
        return product;
      });
      return { ...state, allProducts: newState };
    }

    case actionTypes.SEARCH_PRODUCT : {
      if (action.name === '') {
        return { ...state, filterProducts: {} };
      }
      const searchProduct = state.allProducts.filter(product => {
        return product.name.toUpperCase().includes(action.name.toUpperCase()) || product.type.name.toUpperCase().includes(action.name.toUpperCase());
      });
      if (!searchProduct.length) {
        return { ...state, filterProducts: { notFound: true } };
      }
      return { ...state, filterProducts: { notFound: false, foundList: searchProduct } };
    }

    case actionTypes.UPDATE_STOCK_API: {
      newState = state.allProducts.map((product) => {
        if (product._id === action.data._id) {
          return action.data;
        }
        return product;
      });
      return { ...state, allProducts: newState };
    }

    default: return state;
  }
}
