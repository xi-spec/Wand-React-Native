import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/productActions';
import { Provider } from 'react-redux';
import Cart from './index';

describe('Given a Cart component', () => {
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
    }
  });
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'increaseQuantityCart').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'decreaseQuantityCart').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'deleteProductCart').mockReturnValueOnce({ type: '' });

    navigation = {
      navigate: jest.fn()
    };
  });

  describe('When is rendered with cart.totalCost === 0', () => {
    test('Then is matched to snapshop', () => {
      const store = mockStore({
        cart: {
          cartList: [],
          totalItem: 0,
          totalCost: 0
        }
      });
      const tree = render(<Provider store={store}><Cart /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is rendered with cart.totalCost === 1', () => {
    test('Then is mached snapshot', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' }
          }],
          totalItem: 0,
          totalCost: 1
        }
      });
      const tree = render(<Provider store={store}><Cart /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When is rendered with item.motto === hello', () => {
    test('Then is mached snapshot', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' },
            motto: 'hello'
          }],
          totalItem: 0,
          totalCost: 1
        }
      });
      const tree = render(<Provider store={store}><Cart /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When productImage  is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const navigation = {
        navigate: jest.fn()
      };

      const { getByTestId } = render(
      <Provider store={store}><Cart navigation={navigation} /></Provider>);

      fireEvent.press(getByTestId('productImage'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When item.quantity is > 1  and decrease quantity button is pressed ', () => {
    test('Then actions.decreaseQuantityCart is invoked', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' },
            quantity: 2
          }],
          totalCost: 1

        }
      });

      const { getByTestId } = render(
      <Provider store={store}><Cart/></Provider>);

      fireEvent.press(getByTestId('decrease'));

      expect(actions.decreaseQuantityCart).toHaveBeenCalled();
    });
  });

  describe('When have item.stock  and increase quantity button is pressed', () => {
    test('Then actions.increaseQuantityCart is invoked', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' },
            quantity: 2,
            stock: 1
          }],
          totalCost: 1
        }
      });

      const { getByTestId } = render(
      <Provider store={store}><Cart/></Provider>);

      fireEvent.press(getByTestId('increase'));

      expect(actions.increaseQuantityCart).toHaveBeenCalled();
    });
  });

  describe('When delete button is pressed', () => {
    test('Then actions.deleteProductCart is invoked', () => {
      const { getByTestId } = render(
      <Provider store={store}><Cart/></Provider>);

      fireEvent.press(getByTestId('delete'));

      expect(actions.deleteProductCart).toHaveBeenCalled();
    });
  });
  describe('When checkout button is pressed', () => {
    test('Then navigation.navigate is invoked with Checkout when user isLogged', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' },
            quantity: 2,
            stock: 1
          }],
          totalCost: 1
        },
        user: {
          isLogged: true
        }
      });

      const { getByTestId } = render(
      <Provider store={store}><Cart navigation={navigation}/></Provider>);

      fireEvent.press(getByTestId('checkout'));

      expect(navigation.navigate).toHaveBeenCalled();
    });

    test('Then navigation.navigate is invoked with Checkout when user isLogged', () => {
      const store = mockStore({
        cart: {
          cartList: [{
            _id: '1',
            images: { alls: ['url'] },
            cost: { value: 1, currency: 'euro' },
            quantity: 2,
            stock: 1
          }],
          totalCost: 1
        },
        user: {
          isLogged: false
        }
      });
      const { getByTestId } = render(
      <Provider store={store}><Cart navigation={navigation}/></Provider>);

      fireEvent.press(getByTestId('checkout'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
