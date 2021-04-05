import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/userActions';
import { Provider } from 'react-redux';
import Register from './index';
import { Alert } from 'react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
describe('Given a Register component', () => {
  const mockStore = configureStore();
  let store;
  let navigation;
  let alert;

  beforeEach(() => {
    jest.spyOn(actions, 'cleanIsExistStatus').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'register').mockReturnValueOnce({ type: '' });
    jest.spyOn(actions, 'cleanRegisted').mockReturnValueOnce({ type: '' });
    alert = jest.spyOn(Alert, 'alert');

    store = mockStore({
      user: { isLogged: false }
    });
    navigation = {
      navigate: jest.fn()
    };
  });
  describe('When is render', () => {
    describe('And user.isLogged is false', () => {
      test('Then is mathced to snapshot', () => {
        const tree = render(<Provider store={store}><Register navigation={navigation} /></Provider>);

        expect(tree).toMatchSnapshot();
      });
    });

    describe('And user.isRegisted is true', () => {
      test('Then alert is invoked', () => {
        store = mockStore({
          user: {
            isRegisted: true
          }
        });

        render(<Provider store={store}><Register navigation={navigation} /></Provider>);

        expect(alert).toHaveBeenCalled();
      });

      test('Then navigation.navigate is invoked', () => {
        render(<Provider store={store}><Register navigation={navigation} /></Provider>);
        alert.mock.calls[0][2][0].onPress();

        expect(actions.cleanRegisted).toHaveBeenCalled();
      });
    });

    describe('And user.isExist is true', () => {
      test('Then Alert.alert is invoked', () => {
        store = mockStore({
          user: {
            isExist: true
          }
        });

        render(<Provider store={store}><Register /></Provider>);

        expect(alert).toHaveBeenCalled();
      });
    });

    describe('And pressed ok button of Alert.alert', () => {
      test('Then actions.cleanIsExistStatus is invoked', () => {
        store = mockStore({
          user: {
            isExist: true
          }
        });
        alert.mock.calls[1][2][0].onPress();

        render(<Provider store={store}><Register /></Provider>);

        expect(actions.cleanIsExistStatus).toHaveBeenCalled();
      });
    });
  });

  describe('When nameTextInput is typing wiht NAME', () => {
    test('Then nameTextInput.value is NAME ', () => {
      const { getByPlaceholderText } = render(<Provider store={store}><Register /></Provider>);

      const text = 'NAME';
      const nameTextInput = getByPlaceholderText('Name');

      fireEvent.changeText(nameTextInput, text);

      expect(nameTextInput.props.value).toBe(text);
    });
  });

  describe('When some textInput is typing', () => {
    test('Then her onChange function will invoked', () => {
      const tree = render(<Provider store={store}><Register /></Provider>);

      const text = 'HELLO';

      const nameTextInput = tree.getByPlaceholderText('Name');
      fireEvent.changeText(nameTextInput, text);

      const passwordInput = tree.getByPlaceholderText('Password');
      fireEvent.changeText(passwordInput, text);

      const emailInput = tree.getByPlaceholderText('Email Address');
      fireEvent.changeText(emailInput, text);

      const confirmInput = tree.getByPlaceholderText('Confirm password');
      fireEvent.changeText(confirmInput, text);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When have textInput Error', () => {
    test('Then will render a wrong message', () => {
      const mockState = React.useState;
      jest.spyOn(React, 'useState')
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(''))
        .mockImplementationOnce(() => mockState(true))
        .mockImplementationOnce(() => mockState(true))
        .mockImplementationOnce(() => mockState(true))
        .mockImplementationOnce(() => mockState(true));

      const tree = render(<Provider store={store}><Register /></Provider>);
      expect(tree).toMatchSnapshot();
    });
  });
});
