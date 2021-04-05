
import React from 'react';
import TypeList from './index';
import configureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/productActions';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react-native';

jest.mock('../../../redux/actions/productActions');

describe('Given a TypeList component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ productsType: [{ name: 'rings' }] });
  beforeEach(() => {
    jest.spyOn(actions, 'loadProductsType').mockReturnValueOnce({ type: '' });
  });
  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const tree = render(<Provider store={store}><TypeList /></Provider>);
      expect(tree).toMatchSnapshot();
    });
    test('Then actions.loadProductsType is invoked', () => {
      render(<Provider store={store}><TypeList /></Provider>);
      expect(actions.loadProductsType).toHaveBeenCalled();
    });
  });
  describe('When is press in testId navigation', () => {
    test('Then navigation.navigate is invoked', () => {
      const navigation = {
        navigate: jest.fn()
      };

      const { getByTestId } = render(<Provider store={store}><TypeList navigation={navigation} /></Provider>);
      const touch = getByTestId('navigation');
      fireEvent.press(touch);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
