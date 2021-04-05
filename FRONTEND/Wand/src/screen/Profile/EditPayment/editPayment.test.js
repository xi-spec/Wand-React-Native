import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/userActions';
import { Provider } from 'react-redux';
import EditPayment from './index';

describe('Given a EditPayment component', () => {
  const mockStore = configureStore();
  let store;
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'updateCard').mockReturnValueOnce({ type: '' });
    store = mockStore({
      user: {
        card: {
        }
      }
    });
    navigation = {
      goBack: jest.fn()
    };
  });
  describe('When is render', () => {
    test('Then is mathced to snapshot', () => {
      const tree = render(<Provider store={store}><EditPayment navigation={navigation} /></Provider>);

      expect(tree).toMatchSnapshot();
    });

    test('Then is mathced to snapshot when hasnt user.card', () => {
      store = mockStore({
        user: {

        }
      });
      const tree = render(<Provider store={store}><EditPayment navigation={navigation} /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is typing in input', () => {
    test('Then is input value is change', () => {
      const { getByPlaceholderText } = render(<Provider store={store}><EditPayment navigation={navigation} /></Provider>);

      const cardNumberInput = getByPlaceholderText('Card number');
      const codeInput = getByPlaceholderText('security code');
      const cardHolderInput = getByPlaceholderText('cardholder name');
      const dateInput = getByPlaceholderText('dd/mm/yy');
      const text = ('hola');

      act(() => {
        fireEvent.changeText(cardNumberInput, text);
        fireEvent.changeText(codeInput, text);
        fireEvent.changeText(cardHolderInput, text);
        fireEvent.changeText(dateInput, text);
      });
      expect(cardNumberInput.props.value).toBe(text);
      expect(codeInput.props.value).toBe(text);
      expect(cardHolderInput.props.value).toBe(text);
      expect(dateInput.props.value).toBe(text);
    });
  });

  describe('When apply button is pressed', () => {
    test('Then actions.updateCard invoked', () => {
      store = mockStore({
        user: {
          card: {
            cardNumber: '1234567890123456',
            securtyCode: 'hello',
            cardholder: 'hello',
            expiryDate: 'hello'
          }
        }
      });

      const { getByTestId } = render(<Provider store={store}><EditPayment navigation={navigation}/></Provider>);

      fireEvent.press(getByTestId('apply'));
      expect(actions.updateCard).toHaveBeenCalled();
    });
    test('Then is rendered correct when cardNumber is incorrect', () => {
      store = mockStore({
        user: {
          card: {
            cardNumber: '123456789',
            securtyCode: 'hello',
            cardholder: 'hello',
            expiryDate: 'hello'
          }
        }
      });

      const tree = render(<Provider store={store}><EditPayment navigation={navigation}/></Provider>);

      fireEvent.press(tree.getByTestId('apply'));
      expect(tree).toMatchSnapshot();
    });
  });
});
