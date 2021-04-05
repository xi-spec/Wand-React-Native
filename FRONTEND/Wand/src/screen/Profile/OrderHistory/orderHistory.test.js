import React from 'react';
import { render } from '@testing-library/react-native';
import OrderHistory from './index';
import ConfigureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Given a OrderHistory component', () => {
  let user;
  let navigation;
  const mockStore = ConfigureStore();
  const store = mockStore({
    user: {
      orderHistory: [
        { _id: 1, cartList: [{ quantity: 1 }], totalCost: 1, creationDate: '222222TTTTT' }
      ]
    }
  });

  beforeEach(() => {
    navigation = {
      goBack: jest.fn(),
      navigate: jest.fn()
    };
  });

  describe('When is render', () => {
    test('Then is rendered correctly', () => {
      const tree = render(<Provider store={store}><OrderHistory navigation={navigation} user={user}/></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
});
