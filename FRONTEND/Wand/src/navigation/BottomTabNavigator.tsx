import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeSrackScreen';
import FavouriteStackScreen from '../navigation/FavouriteStackScreen';
import CartStackScreen from '../navigation/CartStackScreen';
import SearchStackScreen from '../navigation/SearchStackScreen';
import ProfileStackScreen from '../navigation/ProfileStackScreen';
import { useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { COLORS } from '../constants/theme';
import { connect } from 'react-redux';
import WelcomeStackScreen from './WelcomeStackScreen';
import getTabBarVisible from '../utils/getBarVisible';

function setIcon (color) {
  const route = useRoute();
  switch (route.name) {
    case 'Home':
      return <Icon name="home"type="antdesign"size={25} color={color}/>;
    case 'Favourite':
      return <Icon name="heart"type="evilicon"size={30} color={color}/>;

    case 'Cart':
      return <Icon name="cart"type="evilicon"size={30} color={color}/>;

    case 'Search':
      return <Icon name="search"type="evilicon"size={30} color={color}/>;

    case 'Profile':
      return <Icon name="user"type="evilicon"size={30} color={color}/>;
  }
}

function BottomTabNavigator ({ cartList }:any) {
  const Tab = createBottomTabNavigator();
  const count = cartList.reduce((acc, product) => acc + product.quantity, 0);
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: 'grey',
      tabStyle: {
        paddingTop: 10
      }
    }}>
      <Tab.Screen name="Welcome" component={WelcomeStackScreen} options={{
        tabBarButton: () => null,
        tabBarVisible: false
      }}/>
      <Tab.Screen name="Home" component={HomeStackScreen} options={({ navigation, route }) => (
        {
          tabBarIcon: ({ color }) => setIcon(color),
          tabBarVisible: getTabBarVisible(route)
        })
        }/>
        <Tab.Screen name="Search" component={SearchStackScreen} options={() => ({
          tabBarIcon: ({ color }) => setIcon(color)
        })}/>
      <Tab.Screen name="Cart" component={CartStackScreen} options={({ route }) => ({
        tabBarIcon: ({ color }) => setIcon(color),
        tabBarBadge: cartList.length === 0 ? null : count,
        tabBarVisible: getTabBarVisible(route)

      })} />
       <Tab.Screen name="Favourite" component={FavouriteStackScreen} options={({ route }) => ({

         tabBarIcon: ({ color }) => setIcon(color),
         tabBarVisible: getTabBarVisible(route)
       }
       )}/>

      <Tab.Screen name="Profile" component={ProfileStackScreen} options={({ route }) => ({
        tabBarIcon: ({ color }) => setIcon(color),
        tabBarVisible: getTabBarVisible(route)
      })}/>
    </Tab.Navigator>
  );
}

function mapStateToProps ({ cart: { cartList } }) {
  return {
    cartList
  };
}

export default connect(mapStateToProps, null)(BottomTabNavigator);
