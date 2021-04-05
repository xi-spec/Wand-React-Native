import React from 'react';
import ProductDetail from './index';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/productActions';
import * as userActions from '../../redux/actions/userActions';
import { Provider } from 'react-redux';
import { render, fireEvent, act } from '@testing-library/react-native';
import thunk from 'redux-thunk';

jest.mock('@gorhom/bottom-sheet', () => '');

describe('Given a ProductDetail component', () => {
  const mockStore = configureStore([thunk]);
  let store;
  let route;
  let navigation;
  beforeEach(() => {
    jest.spyOn(actions, 'loadProductDetail').mockReturnValueOnce({ type: '' });
    jest.spyOn(userActions, 'addProductToFavourite').mockReturnValueOnce({ type: '' });
    route = {
      params: { productId: 1 }
    };
    store = mockStore({
      products: {
        selectedProduct: {
          name: 'rings',
          images: { alls: ['mockimageUrl'] },
          cost: {
            value: 2,
            currency: 'euro'
          },
          weight: {
            value: 2,
            volum: 'g'
          },
          stock: 1
        }
      },
      user: {
        favourite: [{ _id: 1 }]
      }
    });
    navigation = {
      navigate: jest.fn()
    };
  });

  describe('When is rendered', () => {
    test('Then render is  matched snapshot', () => {
      const tree = render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
    test('Then the action.loadProductDetail is invoked', () => {
      render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(actions.loadProductDetail).toHaveBeenCalled();
    });
  });

  describe('When user.favourite.every product what is diferente than selectedproduct', () => {
    test('Then render is  to match snapshot', () => {
      store = mockStore({
        products: {
          selectedProduct: {
            name: 'rings',
            images: { alls: ['url'] },
            cost: {
              value: 2,
              currency: 'euro'
            },
            weight: {
              value: 2,
              volum: 'g'
            },
            stock: 1
          }
        },
        user: {
          favourite: [{ _id: 2 }]
        }
      });
      const tree = render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
    test('Then the action.loadProductDetail is invoked', () => {
      render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(actions.loadProductDetail).toHaveBeenCalled();
    });
  });

  describe('When images.alls is a empty array', () => {
    test('Then render is  to match snapshot', () => {
      store = mockStore({
        products: {
          selectedProduct: {
            name: 'rings',
            images: { alls: ['hello'] },
            cost: {
              value: 2,
              currency: 'euro'
            },
            weight: {
              value: 2,
              volum: 'g'
            },
            stock: 1
          }
        },
        user: {
          favourite: [{ _id: 2 }]
        }
      });
      const tree = render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
    test('Then the action.loadProductDetail is invoked', () => {
      render(<Provider store={store}><ProductDetail route={route} /></Provider>);
      expect(actions.loadProductDetail).toHaveBeenCalled();
    });
  });

  describe('When  heart icon is pressed and user is not logged', () => {
    test('Then navigation.navigate is invoked', () => {
      const tree = render(<Provider store={store}><ProductDetail route={route} navigation={navigation} /></Provider>);
      fireEvent.press(tree.getByTestId('heart'));

      expect(navigation.navigate).toMatchSnapshot();
    });
  });

  describe('When  heart icon is pressed and user is  logged', () => {
    test('Then actions.addProductToFavourite is invoked', () => {
      jest.useFakeTimers();
      store = mockStore({
        products: {
          selectedProduct: {
            name: 'rings',
            images: { alls: ['url'] },
            cost: {
              value: 2,
              currency: 'euro'
            },
            weight: {
              value: 2,
              volum: 'g'
            },
            stock: 1
          }
        },
        user: {
          favourite: [{ _id: 2 }],
          isLogged: true
        }
      });
      const tree = render(<Provider store={store}><ProductDetail route={route} navigation={navigation} /></Provider>);
      fireEvent.press(tree.getByTestId('heart'));

      act(() => {
        jest.runAllTimers();
      });

      expect(actions.addProductToFavourite).toMatchSnapshot();
    });
  });

  describe('When  heart icon is pressed and user is  logged and favourite is false', () => {
    test('Then tree will match to snapshp', () => {
      store = mockStore({
        products: {
          selectedProduct: {
            name: 'rings',
            images: { alls: ['url'] },
            cost: {
              value: 2,
              currency: 'euro'
            },
            weight: {
              value: 2,
              volum: 'g'
            },
            stock: 1
          }
        },
        user: {
          favourite: [{ _id: 2 }],
          isLogged: true
        }
      });

      const tree = render(<Provider store={store}><ProductDetail route={route} navigation={navigation} /></Provider>);
      fireEvent.press(tree.getByTestId('heart'));
      fireEvent.press(tree.getByTestId('heart'));

      expect(tree).toMatchSnapshot();
    });
  });
});
