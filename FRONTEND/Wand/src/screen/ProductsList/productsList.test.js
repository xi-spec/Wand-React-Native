import React from 'react';
import ProductsList from './index';
import { render, fireEvent, act } from '@testing-library/react-native';
import * as actions from '../../redux/actions/productActions';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

jest.mock('../../redux/actions/productActions');

describe('Given a ProductsList component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    products: {
      productsList: [{
        name: 'be happy 1',
        cost: { value: 2, currency: 'euro' },
        images: { alls: ['url'] }
      }]
    }
  });
  let route;
  beforeEach(() => {
    jest.spyOn(actions, 'loadProductsList').mockReturnValueOnce({ type: '', typeName: 'Rings' });
    route = {
      params: { typeName: 'Rings' }
    };
  });
  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const tree = render(<Provider store={store}><ProductsList route ={route} /></Provider>);
      expect(tree).toMatchSnapshot();
    });
    test('Then actions.loadProductsList is invoked', () => {
      render(<Provider store={store}><ProductsList route ={route} /></Provider>);
      expect(actions.loadProductsList).toHaveBeenCalled();
    });
  });
  describe('When is press in testId productsList', () => {
    test('Then navigation.navigate is invoked', () => {
      const navigation = {
        navigate: jest.fn()
      };

      const { getByTestId } = render(<Provider store={store}><ProductsList navigation={navigation} route ={route} /></Provider>);
      const touch = getByTestId('productsList');

      act(() => {
        fireEvent.press(touch);
      });

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
