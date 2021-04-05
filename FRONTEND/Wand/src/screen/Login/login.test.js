import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/userActions';
import Login from '../Login';
import thunk from 'redux-thunk';
import { Alert } from 'react-native';

describe('Given a Login component', () => {
  const mockStore = configureStore([thunk]);
  let store;
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'login').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'cleanLoginError').mockReturnValueOnce({ type: '' });
    store = mockStore({
      user: {
        email: 'ho@la.com',
        password: '123123123',
        isLogged: false
      }
    });
    navigation = {
      navigate: jest.fn(),
      reset: jest.fn()
    };
  });
  describe('When is rendered', () => {
    describe('And user.isLogged is false', () => {
      test('Then is matched to snapshot', () => {
        const tree = render(<Provider store={store}><Login/></Provider>);

        expect(tree).toMatchSnapshot();
      });
    });
    describe('And user.isLogged is true', () => {
      test('Then navigantion.reset is invoked ', () => {
        store = mockStore({
          user: {
            isLogged: true
          }
        });

        render(<Provider store={store}><Login navigation={navigation}/></Provider>);

        expect(navigation.reset).toHaveBeenCalled();
      });
    });
  });

  describe('When emailInput is typing with HELLO', () => {
    test('Then emailInput value is HELLO in lowerCase', () => {
      const { getByTestId } = render(<Provider store={store}><Login/></Provider>);
      const emailInput = getByTestId('emailInput');
      const text = 'HELLO';
      fireEvent.changeText(emailInput, text);

      expect(emailInput.props.value).toBe(text.toLowerCase());
    });
  });

  describe('When passwordInput is typing with HELLO', () => {
    test('Then passwordInput value is HELLO', () => {
      const { getByTestId } = render(<Provider store={store}><Login/></Provider>);
      const passwordInput = getByTestId('passwordInput');
      const text = 'HELLO';
      fireEvent.changeText(passwordInput, text);

      expect(passwordInput.props.value).toBe(text);
    });
  });

  describe('When login button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getByTestId } = render(<Provider store={store}><Login navigation={navigation}/></Provider>);
      const login = getByTestId('login');
      fireEvent.press(login);

      expect(actions.login).toHaveBeenCalled();
    });
  });

  describe('When user.loginError is true', () => {
    test('Then Alert.alert is invoked with a error message', () => {
      store = mockStore({
        user: {
          loginError: true
        }
      });
      jest.spyOn(Alert, 'alert').mockReturnValueOnce('error');
      render(<Provider store={store}><Login navigation={navigation}/></Provider>);

      expect(Alert.alert).toHaveBeenCalled();
    });
    describe('And pressed ok ', () => {
      test('Then actions.cleanLoginError is invoked', () => {
        store = mockStore({
          user: {
            loginError: true
          }
        });
        render(<Provider store={store}><Login navigation={navigation}/></Provider>);
        jest.spyOn(Alert, 'alert').mock.calls[0][2][0].onPress();

        expect(actions.cleanLoginError).toHaveBeenCalled();
      });
    });
  });
});
