import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmptyFavourite from './index';

describe('Give a EmptyFavourite component', () => {
  let navigation;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      reset: jest.fn()
    };
  });
  describe('When is rendered', () => {
    test('Then is rendered correct', () => {
      const tree = render(<EmptyFavourite />);

      expect(tree).toMatchSnapshot();
    });
    describe('When is pressed a shopNow button or viewCart button', () => {
      test('Then navigation.navigate or reset is invoked', () => {
        const { getByTestId } = render(<EmptyFavourite navigation={navigation} />);

        fireEvent.press(getByTestId('shopNow'));
        expect(navigation.reset).toHaveBeenCalled();

        fireEvent.press(getByTestId('viewCart'));
        expect(navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});
