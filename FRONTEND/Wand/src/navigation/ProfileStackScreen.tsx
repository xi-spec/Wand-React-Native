import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screen/Profile';
import Login from '../screen/Login';
import Register from '../screen/Register';
import EditAddress from '../screen/Profile/EditAddress';
import { genaralOptions, titleOptions } from '../utils/navigationOptions';
import EditPayment from '../screen/Profile/EditPayment';
import OrderHistory from '../screen/Profile/OrderHistory';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen () {
  return (
      <>
    <ProfileStack.Navigator
    initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={Profile} options={titleOptions}/>
      <ProfileStack.Screen name="Shipping address" component={EditAddress} options={genaralOptions}/>
      <ProfileStack.Screen name="Order history" component={OrderHistory} options={genaralOptions}/>
      <ProfileStack.Screen name="Payment method" component={EditPayment} options={genaralOptions}/>
      <ProfileStack.Screen name="Login" component={Login} options={genaralOptions}/>
      <ProfileStack.Screen name="Register" component={Register} options = {genaralOptions}/>
    </ProfileStack.Navigator>
    </>
  );
}
