import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login';
import { login } from '../constants/navigationOptions';
import SignUp from '../screen/Register';
import Welcome from '../screen/Welcome';

const WelcomeStack = createStackNavigator();

export default function WelcomeStackScreen () {
  return (
      <>
    <WelcomeStack.Navigator
    initialRouteName="Welcome">
    <WelcomeStack.Screen name="Welcome" component={Welcome} options={{
      headerShown: false
    }}/>
      <WelcomeStack.Screen name="Login" component={Login} options={login}/>
      <WelcomeStack.Screen name='Register' component={SignUp} options={login}/>
    </WelcomeStack.Navigator>
    </>
  );
}
