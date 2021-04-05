import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screen/Search';
import { titleOptions } from '../utils/navigationOptions';

const SearchStack = createStackNavigator();

export default function SearchStackScreen () {
  return (
      <>
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} options={titleOptions}/>
    </SearchStack.Navigator>
    </>
  );
}
