import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as productActions from '../../../redux/actions/productActions';
import * as actions from '../../../redux/actions/userActions';

import { Provider } from 'react-redux';
import Checkout from './index';

describe('Given a Checkout component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    cart: {
      cartList: [{
        _id: '1',
        images: { alls: ['url'] },
        cost: { value: 1, currency: 'euro' }
      }],
      totalItem: 0,
      totalCost: 1
    },
    user: {
      address: {},
      card: { cardNumber: '123456789012' }

    }
  });
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'paymentSuccessfuly').mockReturnValueOnce({ type: '' });
    jest.spyOn(productActions, 'updateStockApi').mockReturnValueOnce({ type: '' });

    navigation = {
      navigate: jest.fn()
    };
  });

  describe('When is invoked ', () => {
    test('Then is rendered correct with user address & card information', () => {
      const tree = render(<Provider store={store}><Checkout /></Provider>);

      expect(tree).toMatchSnapshot();
    });
    test('Then is rendered correct without user address & card information', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' }
          }],
          totalItem: 0,
          totalCost: 1
        },
        user: {

        }
      });
      const tree = render(<Provider store={store}><Checkout /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When navigation button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getAllByTestId } = render(
          <Provider store={store}><Checkout navigation={navigation} /></Provider>);

      const navigationArray = getAllByTestId('navigation');

      navigationArray.forEach(navigation => fireEvent.press(navigation));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When pay button is pressed', () => {
    test('Then is rendered correctly', () => {
      const tree = render(
          <Provider store={store}><Checkout navigation={navigation} /></Provider>);
      fireEvent.press(tree.getByTestId('pay'));

      expect(tree).toMatchSnapshot();
    });
  });
});
