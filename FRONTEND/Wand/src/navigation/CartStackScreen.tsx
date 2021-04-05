import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screen/Cart';
import Checkout from '../screen/Cart/Checkout';
import PaymentSuccessful from '../screen/Cart/PaymentSuccessful';
import { genaralOptions, titleOptions } from '../utils/navigationOptions';
import EditAddress from '../screen/Profile/EditAddress';
import EditPayment from '../screen/Profile/EditPayment';

const CartStack = createStackNavigator();

export default function CartStackScreen () {
  return (
      <>
    <CartStack.Navigator
      initialRouteName="Cart">
      <CartStack.Screen name="Cart" component={Cart} options={titleOptions}/>
      <CartStack.Screen name="Checkout" component={Checkout} options={genaralOptions}/>
      <CartStack.Screen name="Address" component={EditAddress} options={genaralOptions}/>
      <CartStack.Screen name="Payment" component={EditPayment} options={genaralOptions}/>
      <CartStack.Screen name="Payment successful" component={PaymentSuccessful} options={genaralOptions}/>
    </CartStack.Navigator>
    </>
  );
}
