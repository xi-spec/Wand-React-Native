import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoggedProfile from './index';

describe('Given a LoggedProfile component', () => {
  let user;
  let navigation;

  beforeEach(() => {
    user = {
      address: {
        street: '',
        country: '',
        city: '',
        postcode: ''
      },
      name: 'Xi'
    };

    navigation = {
      goBack: jest.fn(),
      navigate: jest.fn()
    };
  });

  describe('When is render', () => {
    test('Then is rendered correctly', () => {
      const tree = render(<LoggedProfile navigation={navigation} user={user}/>);

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When pressed a navigation button', () => {
    test('Then navigation.navigate is invoked', () => {
      const { getAllByTestId } = render(<LoggedProfile navigation={navigation} user={user}/>);

      const navigationArray = getAllByTestId('navigation');

      navigationArray.forEach(navigation => fireEvent.press(navigation));

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
