import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import EmptyCart from './index';

describe('Given a EmptyCart component', () => {
  let navigation;
  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      reset: jest.fn()
    };
  });

  describe('When is rendered ', () => {
    test('Then is matched to snapshop', () => {
      const tree = render(<EmptyCart/>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When SHOP NOW button is pressed', () => {
    test('Then actions.increaseQuantityCart is invoked', () => {
      const { getByTestId } = render(<EmptyCart navigation={navigation}/>);

      act(() => {
        fireEvent.press(getByTestId('shopNow'));
      });

      expect(navigation.reset).toHaveBeenCalled();
    });
  });

  describe('When  VIEW WISHLIST button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<EmptyCart navigation={navigation}/>);

      act(() => {
        fireEvent.press(getByTestId('favourite'));
      });

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
