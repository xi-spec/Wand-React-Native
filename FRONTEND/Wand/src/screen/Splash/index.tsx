import React from 'react';
import { View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IMAGES } from '../../constants/images';
import styles from './styles';

export default function Splash () {
  return (
<View style={styles.container}>

<Animatable.View style={styles.background} animation='zoomIn' duration={2500}>
      <Image style={styles.logo}source={{ uri: IMAGES.logo }} />
        </Animatable.View>
</View>
  );
}
