
import React from 'react';
import Welcome from './index';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../redux/store/configureStore';

describe('Given a Welcome component', () => {
  let navigation;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn()
    };
  });
  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const tree = render(<Provider store={store}><Welcome /></Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('Then has 1 child', () => {
      const tree = render(<Provider store={store}><Welcome /></Provider>).toJSON();
      expect(tree.children.length).toBe(1);
    });
  });

  describe('When is press in testId login', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Welcome navigation={navigation} /></Provider>);
      const touch = getByTestId('login');

      act(() => {
        fireEvent.press(touch);
      });

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
  describe('When is press in testId signUp', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<Welcome navigation={navigation}/>);
      const touch = getByTestId('signUp');

      act(() => {
        fireEvent.press(touch);
      });

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When is press in testId home', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<Welcome navigation={navigation}/>);
      const touch = getByTestId('home');

      act(() => {
        fireEvent.press(touch);
      });

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
