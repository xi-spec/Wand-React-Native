import React from 'react';
import Home from './index';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/productActions';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react-native';

jest.mock('@gorhom/bottom-sheet', () => '');
jest.mock('react-native-swiper/src', () => '');

describe('Given a Home component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    products: {
      allProducts: [{ images: { alls: ['url'] }, cost: { value: 1, currency: 'euro' } }]
    }
  });

  describe('When is rendered', () => {
    test('Then is rendered correct', () => {
      const tree = render(<Provider store={store}><Home /></Provider>);
      expect(tree).toMatchSnapshot();
    });

    test('Then actions.loadAllproducts is invoked', () => {
      jest.spyOn(actions, 'loadAllProducts').mockReturnValueOnce({ type: '' });
      render(<Provider store={store}><Home /></Provider>);
      expect(actions.loadAllProducts).toHaveBeenCalled();
    });
  });
});
