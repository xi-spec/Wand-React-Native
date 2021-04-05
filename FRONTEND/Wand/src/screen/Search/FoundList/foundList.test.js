
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import FoundList from './index';

describe('Given a foundList component', () => {
  let navigation;
  let foundList;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn()
    };
    foundList = [{
      _id: '2',
      name: 'be happy 1',
      cost: { value: 2, currency: 'euro' },
      images: {
        alls: ['url'],
        cover: 'url'
      }
    }];
  });
  describe('When is rendered', () => {
    test('Then is matched to snapshop', () => {
      const tree = render(<FoundList foundList={foundList} />);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When text of search input is change with "HELLO" ', () => {
    test('Then text of search input  to be "HELLO"', () => {
      const { getByTestId } = render(<FoundList foundList={foundList} navigation={navigation}/>);

      fireEvent.press(getByTestId('foundListImage'));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
