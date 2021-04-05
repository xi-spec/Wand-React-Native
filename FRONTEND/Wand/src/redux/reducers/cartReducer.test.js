import cartReducer from './cartReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a cartReducer', () => {
  let initialState;
  let action;

  beforeEach(() => {
    initialState = {
      cart: {
        cartList: [{
          _id: 2,
          cost: {
            value: 1

          },
          stock: 2,
          quantity: 1
        }, {
          _id: 3,
          cost: {
            value: 1

          },
          quantity: 2
        }],
        totalCost: 0
      }
    };
    action = {
      product: {
        _id: 1,
        cost: {
          value: 1

        },
        stock: 2
      }

    };
  });

  describe('When is invoked with actionTypes.ADD_PRODUCT_TO_CART with one product  not in the  cart', () => {
    test('Then state.cart.cartList.lengt to be one more', () => {
      action.type = actionTypes.ADD_PRODUCT_TO_CART;

      const { cartList } = cartReducer(initialState.cart, action);

      expect(cartList.length).toBe(3);
    });
  });

  describe('When is invoked with actionTypes.ADD_PRODUCT_TO_CART with a product already in the  cart ', () => {
    test('Then this product.quantity will be one more', () => {
      action = {
        product: {
          _id: 2,
          cost: {
            value: 1

          },
          stock: 2

        }
      };
      action.type = actionTypes.ADD_PRODUCT_TO_CART;

      const { cartList } = cartReducer(initialState.cart, action);
      const { quantity } = cartList.find(product => product._id === action.product._id);

      expect(quantity).toBe(2);
    });
  });

  describe('When is invoked with action actionTypes.INCREASE_QUANTITY_CART with id 2', () => {
    test('Then product with this.id  of cartList his stock will Be less 1, ', () => {
      action = {
        productId: 2
      };
      action.type = actionTypes.INCREASE_QUANTITY_CART;

      const { cartList } = cartReducer(initialState.cart, action);
      const { stock } = cartList.find(product => product._id === action.productId);

      expect(stock).toBe(1);
    });
  });

  describe('When is invoked with action actionTypes.DECREASE_QUANTITY_CART with id 1', () => {
    test('Then product with this.id  of cartList his quantity will Be  1 less, ', () => {
      action.productId = 3;
      action.type = actionTypes.DECREASE_QUANTITY_CART;

      const { cartList } = cartReducer(initialState.cart, action);
      const { quantity } = cartList.find(product => product._id === action.productId);

      expect(quantity).toBe(1);
    });
  });

  describe('When is invoked with action actionTypes.DELETE_PRODUCT_CART with id 1,and quantity 1', () => {
    test('Then cartList.length will be 1 less ', () => {
      action.productId = 2;
      action.type = actionTypes.DELETE_PRODUCT_CART;

      const { cartList: { length } } = cartReducer(initialState.cart, action);

      expect(length).toBe(1);
    });
  });

  describe('When is invoked with with action.type PAYMENT_SUCCSSFULY', () => {
    test('Then will return a  empty array of cartList', () => {
      action.type = actionTypes.PAYMENT_SUCCSSFULY;

      const { cartList } = cartReducer(initialState.cart, action);
      expect(cartList).toEqual([]);
    });
  });

  describe('When is invoked with an doesn existent type', () => {
    test('Then state will Keep it as it is ', () => {
      action.type = 'none';

      const state = cartReducer(initialState.cart, action);
      expect(state).toEqual(initialState.cart);
    });
  });
});
