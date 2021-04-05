import {
  addProductToFavourite,
  register,
  login,
  cleanIsExistStatus,
  cleanLoginError,
  removeFavourite,
  logout,
  updateAddress,
  updateCard,
  paymentSuccessfuly,
  cleanRegisted

} from './userActions';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import actionTypes from './actionTypes';

jest.mock('axios');
describe('user actions tests', () => {
  const mockStore = configureStore();
  let product;
  let store;
  let user;
  let favouriteControl;
  let cart;

  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    user = {
      favourite: [{ _id: 1 }],
      _id: 1,
      orderHistory: []
    };
    product = {
      _id: 1
    };
    cart = {};
  });
  describe('Given a addProductToFavourite function', () => {
    describe('When is invoked', () => {
      test('Then axios.put is called', () => {
        axios.put = jest.fn();

        addProductToFavourite(product, user, favouriteControl = true)();

        expect(axios.put).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: {} }
        }));

        const dispatchFunction = addProductToFavourite(product, user, favouriteControl = false);

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.ADD_PRODUCT_TO_FAVOURITE,
          data: { user: {} }
        });
      });
    });
  });

  describe('Given a register function', () => {
    describe('When is invoked', () => {
      test('Then axios.post is called', () => {
        axios.post = jest.fn();

        register()();

        expect(axios.post).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: {} },
          status: 200
        }));

        const dispatchFunction = register();

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.REGISTER,
          data: { user: {} },
          status: 200
        });
      });
    });
  });

  describe('Given a login function', () => {
    describe('When is invoked', () => {
      test('Then axios.post is called', () => {
        axios.post = jest.fn();

        login()();

        expect(axios.post).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: {} }
        }));

        const dispatchFunction = login();

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.LOGIN,
          data: { user: {} }
        });
      });
    });
  });

  describe('Given a removeFavourite function', () => {
    product = {
      _id: 2
    };
    describe('When is invoked', () => {
      test('Then axios.post is called', () => {
        axios.put = jest.fn();

        removeFavourite(product, user)();

        expect(axios.put).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: {} }
        }));

        const dispatchFunction = removeFavourite(product, user);

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.REMOVE_FAVOURITE,
          data: { user: {} }
        });
      });
    });
  });

  describe('Given a logout function', () => {
    describe('When is invoked', () => {
      test('Then axios.post is called', () => {
        axios.post = jest.fn();

        logout()();

        expect(axios.post).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: {} }
        }));

        const dispatchFunction = logout();

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.LOGOUT,
          data: { user: {} }
        });
      });
    });
  });

  describe('Given a updateAddress function', () => {
    describe('When is invoked', () => {
      test('Then axios.put is called', () => {
        axios.put = jest.fn();

        updateAddress({}, {}, {}, {}, user)();

        expect(axios.put).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: { _id: 1 } }
        }));

        const dispatchFunction = updateAddress({}, {}, {}, {}, user);

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.UPDATE_USER,
          data: { user: { _id: 1 } }
        });
      });
    });
  });

  describe('Given a updateCard function', () => {
    describe('When is invoked', () => {
      test('Then axios.put is called', () => {
        axios.put = jest.fn();

        updateCard({}, {}, {}, {}, user)();

        expect(axios.put).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: { _id: 1 } }
        }));

        const dispatchFunction = updateCard({}, {}, {}, {}, user);

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.UPDATE_USER,
          data: { user: { _id: 1 } }
        });
      });
    });
  });

  describe('Given a paymentSuccessfuly function', () => {
    describe('When is invoked', () => {
      test('Then axios.put is called', () => {
        axios.put = jest.fn();

        paymentSuccessfuly(user, cart)();

        expect(axios.put).toHaveBeenCalled();
      });
      test('And dispath is called with the data from axios', async () => {
        axios.put = jest.fn().mockImplementationOnce(() => Promise.resolve({
          data: { user: { _id: 1 } }
        }));

        const dispatchFunction = paymentSuccessfuly(user, cart);

        await dispatchFunction(store.dispatch);

        expect(store.dispatch).toHaveBeenCalledWith({
          type: actionTypes.PAYMENT_SUCCSSFULY,
          data: { user: { _id: 1 } }
        });
      });
    });
  });
});

describe('Given a cleanIsExistStatus function', () => {
  describe('When is invoked', () => {
    test('Then will return actionTypes.CLEAN_ISEXIST_STATUS', () => {
      const mockActionReturnObj = {
        type: actionTypes.CLEAN_ISEXIST_STATUS
      };

      const result = cleanIsExistStatus();

      expect(result).toEqual(mockActionReturnObj);
    });
  });
});

describe('Given a cleanLoginError function', () => {
  describe('When is invoked', () => {
    test('Then will return actionTypes.CLEAN_LOGIN_ERROR', () => {
      const mockActionReturnObj = {
        type: actionTypes.CLEAN_LOGIN_ERROR
      };

      const result = cleanLoginError();

      expect(result).toEqual(mockActionReturnObj);
    });
  });
});

describe('Given a cleanRegisted function', () => {
  describe('When is invoked', () => {
    test('Then will return actionTypes.CLEAN_REGISTED', () => {
      const mockActionReturnObj = {
        type: actionTypes.CLEAN_REGISTED
      };

      const result = cleanRegisted();

      expect(result).toEqual(mockActionReturnObj);
    });
  });
});
