import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import ConfigureStore from 'redux-mock-store';
import * as actions from '../../redux/actions/productActions';
import { Provider } from 'react-redux';
import Search from './index';

describe('Given a Search component', () => {
  const mockStore = ConfigureStore();
  const store = mockStore({
    products: {
      filterProducts: {
        foundList: [
        ]
      }
    }
  });

  beforeEach(() => {
    jest.spyOn(actions, 'searchProducts').mockReturnValueOnce({ type: '' });
  });
  describe('When is rendered', () => {
    test('Then is matched to snapshop', () => {
      const tree = render(<Provider store={store}><Search /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When is rendered and notFound prop is true', () => {
    test('Then <NotFound/> component is  matched to snapshop', () => {
      const store = mockStore({
        products: {
          filterProducts: {
            foundList: [

            ],
            notFound: true
          }
        }
      });
      const tree = render(<Provider store={store}><Search /></Provider>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When text of search input is change with "HELLO" ', () => {
    test('Then text of search input  to be "HELLO"', () => {
      const { getByTestId } = render(<Provider store={store}><Search /></Provider>);
      const searchInput = getByTestId('searchInput');
      const text = 'HELLO';

      fireEvent.changeText(searchInput, text);

      expect(searchInput.props.value).toBe(text);
    });
  });

  describe('When useEffect is invoked', () => {
    test('Then actions.searchProducts is invoked', async () => {
      render(<Provider store={store}><Search /></Provider>);

      await waitFor(() => expect(actions.searchProducts).toHaveBeenCalled());
    });
  });
});
