import React from 'react';
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ShoppingCart, User } from '../../../models/initiaState';
import { IMAGES } from '../../../constants/images';

function PaymentSuccessful ({ navigation, cart, user }:
    {cart:ShoppingCart, user:User, navigation:{reset:Function}}) {
  return (
    cart.cartList.length !== 0
      ? <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large"/>

  </View>
      : <View style={styles.container}>
    <Image style={styles.image} source={{ uri: IMAGES.paymentSuccessful }} />
    <Text style={styles.tittle}>Your Order has been accepted</Text>
    <View style={styles.textContainer}>
    <Text style={styles.text}>Your items has been placed and is on</Text>
    <Text style={styles.text}>it’s way to being processed.</Text>
    </View>
     <Text style={styles.thanks}>Thanks!!</Text>

     <View style={styles.continueContainer}>
          <TouchableOpacity
          testID='continueShopping'
          disabled={!user.address || !user.card}
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
          })}
           style={styles.continue}>
            <Text style={styles.continueText}>CONTINUE SHOPPING</Text>
          </TouchableOpacity>
        </View>

    </View>

  );
}

function mapStateToProps ({ cart, user }) {
  return {
    cart,
    user
  };
}

export default connect(mapStateToProps)(PaymentSuccessful);
