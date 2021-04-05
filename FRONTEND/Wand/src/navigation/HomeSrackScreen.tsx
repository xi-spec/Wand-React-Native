import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import ProductsList from '../screen/ProductsList';
import ProductDetail from '../screen/ProductDetail';
import { listOptions, homeOptions, detailOption } from '../utils/navigationOptions';

const HomeStack = createStackNavigator();

export default function HomeStackScreen () {
  return (
      <>
    <HomeStack.Navigator
        initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} options={homeOptions}/>
      <HomeStack.Screen name="List" component={ProductsList} options={listOptions}/>
      <HomeStack.Screen name="Detail" component={ProductDetail} options={detailOption}/>
    </HomeStack.Navigator>
    </>
  );
}
