import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyTheme from './src/constants/navigationDefaultTheme';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

import { useFonts } from 'expo-font';
import Splash from './src/screen/Splash';

export default function App () {
  const [loading, setloading] = React.useState(true);
  useFonts({
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    RalewayRegular: require('./src/assets/fonts/Raleway-Regular.ttf'),
    RalewaySemiBold: require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    RalewayThin: require('./src/assets/fonts/Raleway-Thin.ttf'),
    RalewayExtraLight: require('./src/assets/fonts/Raleway-ExtraLight.ttf'),
    RalewayLight: require('./src/assets/fonts/Raleway-Light.ttf')

  });
  React.useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  });

  return (
    loading
      ? <Splash />
      : <Provider store={store}>
<NavigationContainer theme={MyTheme}>
 <BottomTabNavigator />
</NavigationContainer>
</Provider>

  );
}
