import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../constants/images';
import { FAVOURITE_TEXT } from '../../../constants/screenTexts';

export default function EmptyFavourite ({ navigation }:{navigation:
  {navigate:Function, reset:Function}}) {
  return (
        <View style={styles.container}>
          <Image style={styles.image}source={{ uri: IMAGES.emptyFavourite }}></Image>
        <Text style={styles.text}>{FAVOURITE_TEXT.EMPTY_FAVOURITE_TITLE}</Text>
        <Text style={styles.text}>{FAVOURITE_TEXT.EMPTY_FAVOURITE_SUBTITLE}</Text>

        <View style={styles.buttonsContainer}>

        <TouchableOpacity
        testID='shopNow'
        style={{ ...styles.button, ...styles.colorButton }}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        })}>
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity
          testID="viewCart"
           style={{ ...styles.button, ...styles.whiteButton }}
           onPress={() => navigation.navigate('Cart')}>
            <Text style={{ ...styles.buttonText, ...styles.blackText }}>VIEW CART</Text>
          </TouchableOpacity>
        </View>

      </View>

  );
}
