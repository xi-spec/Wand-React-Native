import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login';
import { login } from '../constants/navigationOptions';
import SignUp from '../screen/Register';

const AuthStack = createStackNavigator();

export default function AuthStackScreen () {
  return (
      <>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}options={login}/>
      <AuthStack.Screen name='SignUp' component={SignUp} options={login}/>
    </AuthStack.Navigator>
    </>
  );
}
