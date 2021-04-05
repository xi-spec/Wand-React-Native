import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../constants/images';
import { NOT_FOUND } from '../../../constants/screenTexts';

export default function NotFound ({ navigation }:any) {
  return (
        <View style={styles.container}>
          <Image style={styles.image}source={{ uri: IMAGES.notFound }}></Image>
        <Text style={styles.text}>{NOT_FOUND.NOT_FOUND_TITLE}</Text>
        <Text style={styles.text}>{NOT_FOUND.NOT_FOUND_SUBTITLE}</Text>
      </View>

  );
}
