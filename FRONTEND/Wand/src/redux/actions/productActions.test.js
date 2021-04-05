import {
  loadProductsType,
  loadAllProducts,
  loadProductsList,
  loadProductDetail,
  addProductToCart,
  increaseQuantityCart,
  decreaseQuantityCart,
  deleteProductCart,
  searchProducts,
  updateStockApi
} from './productActions';
import configureStore from 'redux-mock-store';
import actionTypes from './actionTypes';
import axios from 'axios';

jest.mock('axios');

describe('Given a loadProductsType function', () => {
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
  });

  describe('When is invoked', () => {
    test('Then axios.get is called', () => {
      axios.get = jest.fn();

      loadProductsType()();

      expect(axios.get).toHaveBeenCalled();
    });
    test('And dispatch is called with the data from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: { name: 'rings' }
      }));

      const dispatchFunction = loadProductsType();

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_PRODUCT_TYPE,
        data: { name: 'rings' }
      });
    });
  });
});

describe('Given a loadAllProducts function', () => {
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
  });

  describe('When is invoked', () => {
    test('Then axios.get is called', () => {
      axios.get = jest.fn();

      loadAllProducts()();

      expect(axios.get).toHaveBeenCalled();
    });
    test('And dispatch is called with the data from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: { name: 'Be happy 1' }
      }));

      const dispatchFunction = loadAllProducts();

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_ALL_PRODUCTS,
        data: { name: 'Be happy 1' }
      });
    });
  });
});

describe('Give a loadProductsList', () => {
  describe('When is invoked with a typeName', () => {
    test('Then will return a object with action type  LOAD_PRODUCTS_LIST and a type name', () => {
      const object = {
        type: actionTypes.LOAD_PRODUCTS_LIST,
        typeName: 'ring'
      };

      const result = loadProductsList('ring');

      expect(result).toEqual(object);
    });
  });
});

describe('Give a loadProductDetail', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type LOAD_PRODUCT_DETAILl and a productId', () => {
      const productId = 'mockid';

      const object = {
        type: actionTypes.LOAD_PRODUCT_DETAIL,
        productId
      };

      const result = loadProductDetail(productId);

      expect(result).toEqual(object);
    });
  });
});

describe('Give a addProductToCart', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type ADD_PRODUCT_TO_CART ', () => {
      const product = 'mockProduct';

      const object = {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product
      };

      const result = addProductToCart(product);

      expect(result).toEqual(object);
    });
  });
});

describe('Give a increaseQuantityCart', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type INCREASE_QUANTITY_CART', () => {
      const productId = 'mockid';

      const object = {
        type: actionTypes.INCREASE_QUANTITY_CART,
        productId
      };

      const result = increaseQuantityCart(productId);

      expect(result).toEqual(object);
    });
  });
});

describe('Give a decreaseQuantityCart', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type DECREASE_QUANTITY_CART ', () => {
      const productId = 'mockid';

      const object = {
        type: actionTypes.DECREASE_QUANTITY_CART,
        productId
      };

      const result = decreaseQuantityCart(productId);

      expect(result).toEqual(object);
    });
  });
});

describe('Give a deleteProductCart', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type DELETE_PRODUCT_CART', () => {
      const productId = 'mockid';
      const quantity = 1;

      const object = {
        type: actionTypes.DELETE_PRODUCT_CART,
        productId,
        quantity
      };

      const result = deleteProductCart(productId, quantity);

      expect(result).toEqual(object);
    });
  });
});

describe('Give a searchProducts', () => {
  describe('When is invoked with a produtId', () => {
    test('Then will return a object with action type SEARCH_PRODUCT', () => {
      const name = 'mockName';

      const object = {
        type: actionTypes.SEARCH_PRODUCT,
        name
      };

      const result = searchProducts(name);

      expect(result).toEqual(object);
    });
  });
});

describe('Given a updateStockApi function', () => {
  const mockStore = configureStore();
  let store;
  let cart;
  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    cart = {
      cartList: [{ _id: 1 }]
    };
  });

  describe('When is invoked', () => {
    test('Then axios.put is called', () => {
      axios.put = jest.fn();

      updateStockApi(cart)();

      expect(axios.put).toHaveBeenCalled();
    });
    test('And dispatch is called with the data from axios', async () => {
      axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: { _id: 1 }
      }));

      const dispatchFunction = updateStockApi(cart);

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.UPDATE_STOCK_API,
        data: { _id: 1 }
      });
    });
  });
});
