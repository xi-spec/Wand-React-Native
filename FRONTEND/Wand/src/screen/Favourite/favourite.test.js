import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/userActions';
import * as productActions from '../../redux/actions/productActions';
import { Provider } from 'react-redux';
import Favourite from './index';

describe('Given a Favourite component', () => {
  const mockStore = configureStore();
  let store;
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'removeFavourite').mockReturnValueOnce({ type: '' });
    jest.spyOn(productActions, 'addProductToCart').mockReturnValueOnce({ type: '' });

    store = mockStore({
      user: {
        favourite: [
          {
            name: 'ring',
            cost: {
              value: 1,
              currency: 'euro'
            },
            _id: 1,
            images: {
              alls: ['firstImageUrl']
            }
          }]
      }
    });
    navigation = {
      navigate: jest.fn()
    };
  });
  describe('When is invoked', () => {
    test('Then will rendered correclly', () => {
      const tree = render(<Provider store={store}><Favourite /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When is invoked with empty user.favourite ', () => {
    test('Then will rendered correclly', () => {
      store = mockStore({
        user: {
          favourite: []
        }
      });
      const tree = render(<Provider store={store}><Favourite /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });
  describe('When is pressed in favourite button', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Favourite navigation={navigation} /></Provider>);

      fireEvent.press(getByTestId('favourite'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When is pressed in add button', () => {
    test('Then productActions.addProductToCart is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Favourite navigation={navigation} /></Provider>);

      fireEvent.press(getByTestId('add'));

      expect(productActions.addProductToCart).toHaveBeenCalled();
    });
  });

  describe('When is pressed in remove button', () => {
    test('Then actions.removeFavourite is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Favourite navigation={navigation} /></Provider>);

      fireEvent.press(getByTestId('remove'));

      expect(actions.removeFavourite).toHaveBeenCalled();
    });
  });
});
