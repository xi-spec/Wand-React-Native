import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import PaymentSuccessful from './index';
import ConfigureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Given a PaymentSuccessful component', () => {
  let navigation;
  const mockStore = ConfigureStore();
  const store = mockStore({
    cart: {
      cartList: [1, 2]
    },
    user: {
      address: {},
      card: {}
    }

  });
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      reset: jest.fn()
    };
  });

  describe('When is rendered', () => {
    test('Then is matched to snapshop', () => {
      const tree = render(<Provider store={store}> <PaymentSuccessful/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is rendered with empty cart', () => {
    test('Then is matched to snapshop', () => {
      const store = mockStore({
        cart: {
          cartList: []
        },
        user: {
          address: {},
          card: {}
        }

      });
      const tree = render(<Provider store={store}> <PaymentSuccessful/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When CONTINUE SHOPPING button is pressed', () => {
    test('Then navigation.reset is invoked', () => {
      const store = mockStore({
        cart: {
          cartList: []
        },
        user: {
          address: {},
          card: {}
        }

      });
      const { getByTestId } = render(<Provider store={store}> <PaymentSuccessful navigation={navigation}/></Provider>);

      act(() => {
        fireEvent.press(getByTestId('continueShopping'));
      });

      expect(navigation.reset).toHaveBeenCalled();
    });
  });
});
