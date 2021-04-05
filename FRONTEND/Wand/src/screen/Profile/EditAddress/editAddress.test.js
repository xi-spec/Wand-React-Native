import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import * as actions from '../../../redux/actions/userActions';
import { Provider } from 'react-redux';
import EditAddress from './index';

describe('Given a EditAddress component', () => {
  const mockStore = configureStore();
  let store;
  let navigation;

  beforeEach(() => {
    jest.spyOn(actions, 'updateAddress').mockReturnValueOnce({ type: '' });
    store = mockStore({
      user: {
        address: {
          street: '',
          country: '',
          city: '',
          postcode: ''
        }
      }
    });
    navigation = {
      goBack: jest.fn()
    };
  });
  describe('When is render', () => {
    test('Then is mathced to snapshot', () => {
      const tree = render(<Provider store={store}><EditAddress navigation={navigation} /></Provider>);

      expect(tree).toMatchSnapshot();
    });

    test('Then is mathced to snapshot without address', () => {
      store = mockStore({
        user: {

        }
      });
      const tree = render(<Provider store={store}><EditAddress navigation={navigation} /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is typing in input', () => {
    test('Then is input value is change', () => {
      const { getByPlaceholderText } = render(<Provider store={store}><EditAddress navigation={navigation} /></Provider>);

      const streetInput = getByPlaceholderText('street');
      const countryInput = getByPlaceholderText('country');
      const zipInput = getByPlaceholderText('zip/postcode');
      const cityInput = getByPlaceholderText('city');
      const text = ('hola');

      act(() => {
        fireEvent.changeText(streetInput, text);
        fireEvent.changeText(countryInput, text);
        fireEvent.changeText(zipInput, text);
        fireEvent.changeText(cityInput, text);
      });
      expect(streetInput.props.value).toBe(text);
      expect(countryInput.props.value).toBe(text);
      expect(zipInput.props.value).toBe(text);
      expect(cityInput.props.value).toBe(text);
    });
  });

  describe('When apply button is pressed', () => {
    test('Then actions.updateAddressis invoked', () => {
      store = mockStore({
        user: {
          address: {
            street: 'hello',
            country: 'hello',
            city: 'hello',
            postcode: 'hello'
          }
        }
      });

      const { getByTestId } = render(<Provider store={store}><EditAddress navigation={navigation}/></Provider>);

      fireEvent.press(getByTestId('apply'));
      expect(actions.updateAddress).toHaveBeenCalled();
    });
  });
});
