import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { IMAGES } from '../../constants/images';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Params } from '../../models';
import styles from './styles';

export default function Welcome ({ navigation }:{ navigation: NavigationScreenProp<NavigationRoute<Params>, Params>}) {
  return (
<View style={styles.container}>
    <ImageBackground style={styles.image}source={{ uri: IMAGES.login }}>
        <View style={styles.intoduction}>
        <Text style={styles.text}>Wand</Text>
        <Text style={styles.textSmall}>Three young asian girls in Spain founded WAND in 2020 for design and jewelry, which is the short form </Text>
        <Text style={styles.textSmall}>  “What A Nice Day”.</Text>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
         testID='login'
    style={{ ...styles.button, ...styles.blueButton }}
    onPress={() =>
      navigation.navigate('Login')
    }
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
        <TouchableOpacity
         testID='signUp'
    style={{ ...styles.button, ...styles.whiteButton }}
    onPress={() =>
      navigation.navigate('Register')
    }
      >
        <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>

   <TouchableOpacity
    onPress={() =>
      navigation.navigate('Home')}
      testID='home'
   >

      <Text style={styles.laterText}>Maybe later</Text>
   </TouchableOpacity>
        </View>

    </ImageBackground>
    </View>
  );
}
