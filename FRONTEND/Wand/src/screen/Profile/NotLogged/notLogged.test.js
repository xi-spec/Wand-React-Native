
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import NotLogged from './index';

describe('Given a NotLogged component', () => {
  let navigation;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn()
    };
  });
  describe('When is rendered', () => {
    test('Then is matched to snapshop', () => {
      const tree = render(<NotLogged navigation={navigation} />);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When LOGIN button is pressed" ', () => {
    test('Then navigation navigate is invoked"', () => {
      const { getByTestId } = render(<NotLogged navigation={navigation}/>);

      fireEvent.press(getByTestId('login'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When REGISTER button is pressed" ', () => {
    test('Then navigation navigate is invoked"', () => {
      const { getByTestId } = render(<NotLogged navigation={navigation}/>);

      fireEvent.press(getByTestId('register'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
