import React from 'react';
import Description from './index';
import configureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/productActions';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, fireEvent, act } from '@testing-library/react-native';

jest.mock('../../../redux/actions/productActions');

describe('Given a Description component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({

  });
  let selectedProduct;

  beforeEach(() => {
    jest.spyOn(actions, 'addProductToCart').mockReturnValueOnce({ type: '' });
    selectedProduct = {
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
    };
  });

  describe('When is rendered with selectedProduct.stock', () => {
    test('Then is rendered correct', () => {
      const tree = render(<Provider store={store}><Description selectedProduct={selectedProduct} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When is rendered without selectedProduct.stock', () => {
    test('Then is rendered correct', () => {
      selectedProduct.stock = undefined;
      const tree = render(<Provider store={store}><Description selectedProduct={selectedProduct} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is rendered with the selectedProduct.motto = hello', () => {
    test('Then is rendered correct', () => {
      selectedProduct.motto = 'hello';
      const tree = render(<Provider store={store}><Description selectedProduct={selectedProduct} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the add button is pressed', () => {
    test('Then actions.addProductToCart is invoked', async () => {
      const { getByTestId } = render(<Provider store={store}><Description selectedProduct={selectedProduct} /></Provider>);
      const add = getByTestId('add');
      act(() => {
        fireEvent.press(add);
      });
      expect(actions.addProductToCart).toHaveBeenCalled();
    });
    test('Then Description component is to match snapshoot', () => {
      jest.useFakeTimers();
      const tree = render(<Provider store={store}><Description selectedProduct={selectedProduct} /></Provider>);
      const add = tree.getByTestId('add');

      act(() => {
        fireEvent.press(add);
        jest.runAllTimers();
      });
      expect(tree).toMatchSnapshot();
    });
  });
});
