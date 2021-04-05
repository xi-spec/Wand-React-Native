import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favourite from '../screen/Favourite';
import { titleOptions } from '../utils/navigationOptions';

const FavouriteStack = createStackNavigator();

export default function FavouriteStackScreen () {
  return (
      <>
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen name="Favourite" component={Favourite} options={titleOptions}/>
    </FavouriteStack.Navigator>
    </>
  );
}
