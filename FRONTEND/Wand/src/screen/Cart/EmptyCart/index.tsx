import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../constants/images';
import { CART_TEXT } from '../../../constants/screenTexts';

export default function EmptyCart ({ navigation }:{navigation:{reset:Function, navigate:Function}}) {
  return (
        <View style={styles.container}>
          <Image style={styles.image}source={{ uri: IMAGES.emptyCart }}></Image>
        <Text style={styles.text}>{CART_TEXT.EMPTY_CART_TITLE}</Text>
        <Text style={styles.text}>{CART_TEXT.EMPTY_CART_SUBTITLE}</Text>

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
             testID='favourite'
          style={{ ...styles.button, ...styles.whiteButton }}
           onPress={() => navigation.navigate('Favourite')}>
            <Text style={{ ...styles.buttonText, ...styles.blackText }}>VIEW WISHLIST</Text>
          </TouchableOpacity>
        </View>

      </View>

  );
}
