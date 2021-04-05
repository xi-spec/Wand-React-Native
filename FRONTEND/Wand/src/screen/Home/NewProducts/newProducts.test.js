
import React from 'react';
import NewProducts from './index';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

describe('Given a NewProducts component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    products: {
      allProducts: [
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }

        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        },
        {
          name: 'a',
          images: { alls: ['2', '0'] },
          cost: { value: 1, currency: 'e' }
        }
      ]
    }
  });
  afterEach(cleanup);

  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const tree = render(<Provider store={store}><NewProducts /></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('When is press in testId navigation', () => {
    test('Then navigation.navigate is invoked', () => {
      const navigation = {
        navigate: jest.fn()
      };

      const { getAllByTestId } = render(<Provider store={store}><NewProducts navigation={navigation}/></Provider>);
      const touches = getAllByTestId('newProduts');
      touches.forEach(touch => fireEvent.press(touch));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
