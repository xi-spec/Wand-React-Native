import productsReducer from './productsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a products Reducer', () => {
  let initialState;
  let action;
  let state;
  beforeEach(() => {
    initialState = {
      products: {
        allProducts: [{
          name: 'happy',
          _id: 1,
          type: {
            name: 'ring'
          },
          stock: 2
        },
        {
          _id: 2,
          name: 'nice',
          type: {
            name: 'ring'
          }
        }],
        productsList: [],
        filterProducts: {
          foundList: [],
          notFound: false
        }
      }
    };
    action = {
      data: [{ id: 2 }, { id: 1 }],
      productId: 1,
      typeName: 'ring',
      product: {
        _id: 1
      },
      type: actionTypes.LOAD_ALL_PRODUCTS
    };
  });
  describe('When is invoked with action type:LOAD_ALL_PRODUCTS with data.length === 2', () => {
    test('Then state.allProducts.length toBe 2', () => {
      const { allProducts: { length } } = productsReducer(initialState.products, action);

      expect(length).toBe(2);
    });
  });

  describe('When is invoked with action actionTypes.LOAD_PRODUCT_DETAIL with id 1', () => {
    test('Then state.selectedProduct.id toBe 1, ', () => {
      action.productId = 1;
      action.type = actionTypes.LOAD_PRODUCT_DETAIL;

      const { selectedProduct: { _id } } = productsReducer(initialState.products, action);

      expect(_id).toBe(1);
    });
  });

  describe('When is invoked with action actionTypes.ADD_PRODUCT_TO_CART with id 1', () => {
    test('Then product with this.id  of state.allProducts his stock will Be less 1, ', () => {
      action.productId = 1;
      action.type = actionTypes.ADD_PRODUCT_TO_CART;

      const state = productsReducer(initialState.products, action);
      const { _id } = state.allProducts.find(product => product._id === 1);

      expect(_id).toBe(1);
    });
  });

  describe('When is invoked with action actionTypes.INCREASE_QUANTITY_CART with id 1', () => {
    test('Then product with this.id  of state.allProducts his stock will Be less 1, ', () => {
      action.productId = 1;
      action.type = actionTypes.INCREASE_QUANTITY_CART;

      const state = productsReducer(initialState.products, action);
      const { stock } = state.allProducts.find(product => product._id === 1);

      expect(stock).toBe(1);
    });
  });

  describe('When is invoked with action actionTypes.DECREASE_QUANTITY_CART with id 1', () => {
    test('Then product with this.id  of state.allProducts his stock will Be  1 more, ', () => {
      action.productId = 1;
      action.type = actionTypes.DECREASE_QUANTITY_CART;

      const state = productsReducer(initialState.products, action);
      const { stock } = state.allProducts.find(product => product._id === 1);

      expect(stock).toBe(3);
    });
  });

  describe('When is invoked with action actionTypes.DELETE_PRODUCT_CART with id 1,and quantity 1', () => {
    test('Then product with this.id  of state.allProducts his stock will Be stock + action.quantity(2 + 1), ', () => {
      action.productId = 1;
      action.quantity = 1;
      action.type = actionTypes.DELETE_PRODUCT_CART;

      const state = productsReducer(initialState.products, action);
      const { stock } = state.allProducts.find(product => product._id === 1);

      expect(stock).toBe(3);
    });
  });

  describe('When is invoked with action actionTypes.SEARCH_PRODUCT with id 1 and name === ""', () => {
    test('Then filterProducts will be an empty object ', () => {
      action.name = '';
      action.type = actionTypes.SEARCH_PRODUCT;

      const { filterProducts } = productsReducer(initialState.products, action);

      expect(Object.keys(filterProducts).length).toBe(0);
    });
  });

  describe('When is invoked with action actionTypes.SEARCH_PRODUCT with name === "hello"', () => {
    test('The notFound will be true', () => {
      action.name = 'hello';
      action.type = actionTypes.SEARCH_PRODUCT;

      const { filterProducts: { notFound } } = productsReducer(initialState.products, action);

      expect(notFound).toBe(true);
    });
  });

  describe('When is invoked with action actionTypes.SEARCH_PRODUCT with name === "nice"', () => {
    test('Then notFound will be false', () => {
      action.name = 'nice';
      action.type = actionTypes.SEARCH_PRODUCT;

      const { filterProducts: { notFound } } = productsReducer(initialState.products, action);

      expect(notFound).toBe(false);
    });
  });

  describe('When is invoked with action actionTypes.LOAD_PRODUCTS_LIST with name="All products', () => {
    test('The state.productsList is to equal state.allProducts', () => {
      action.typeName = 'All products';
      action.type = actionTypes.LOAD_PRODUCTS_LIST;

      const { productsList, allProducts } = productsReducer(initialState.products, action);

      expect(productsList).toEqual(allProducts);
    });
  });

  describe('When is invoked with action actionTypes.LOAD_PRODUCTS_LIST with name="ring', () => {
    test('Then productsList  will only be products of this type.name', () => {
      action.typeName = 'ring';
      action.type = actionTypes.LOAD_PRODUCTS_LIST;

      const { productsList } = productsReducer(initialState.products, action);
      const checkType = productsList.every(product => product.type.name === 'ring');

      expect(checkType).toBe(true);
    });
  });

  describe('When is invoked with action actionTypes.UPDATE_STOCK_API', () => {
    test('Then will return update stock', () => {
      action.data = {
        _id: 1,
        stock: 1
      };
      action.type = actionTypes.UPDATE_STOCK_API;

      const { allProducts } = productsReducer(initialState.products, action);

      const { stock } = allProducts.find(product => product._id === action.data._id);

      expect(stock).toBe(1);
    });
  });

  describe('When is invoked with an doesn existent type', () => {
    test('Then state will Keep it as it is ', () => {
      action.type = 'none';

      const state = productsReducer(initialState.products, action);
      expect(state).toEqual(initialState.products);
    });
  });
});
