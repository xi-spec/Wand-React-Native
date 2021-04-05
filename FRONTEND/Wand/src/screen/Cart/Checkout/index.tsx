import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateStockApi } from '../../../redux/actions/productActions';
import { paymentSuccessfuly } from '../../../redux/actions/userActions';
import { ShoppingCart, User } from '../../../models/initiaState';
import { Icon } from 'react-native-elements';
import { IMAGES } from '../../../constants/images';

function Checkout ({ navigation, cart, user, actions }:
  {cart:ShoppingCart, actions:any, user:User, navigation:{navigate:Function}}) {
  const { cardNumber } = user.card || { undefined };

  function confirmAndPay (user, cart) {
    navigation.navigate('Payment successful');
    actions.updateStockApi(cart);
    actions.paymentSuccessfuly(user, cart);
  }

  return (
    <View style={styles.container}>
    <View style={styles.shippingContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Shipping information</Text>
        <TouchableOpacity
        testID='navigation'
        onPress={() => navigation.navigate('Address')}>
        <Text style={styles.edit}>edit</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.shadowBox}>
      <View style={styles.iconContainer}>
          <Icon style={styles.icon} name='person-outline' type='ionicon' />
          <Text style={styles.text}>{user.name}</Text>
      </View>

      <View style={styles.iconContainer}>
          <Icon style={styles.icon}name='map-outline' type='ionicon' />
          {user.address
            ? <Text style={styles.text}>{`${user.address.street} ${user.address.city} ${user.address.postcode} ${user.address.country}`}</Text>
            : <Text style={styles.text}>Please enter your shipping address </Text>
           }
      </View>
        </View>
    </View>

    <View style={styles.shippingContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleText}>Payment Method</Text>
        <TouchableOpacity
        testID='navigation'
        onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.edit}>edit</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.shadowBox}>
      <View style={styles.iconContainer}>
        <Image style={styles.card}source={{ uri: IMAGES.card }}></Image>
          {cardNumber
            ? <Text style={styles.cardNumber }>{`**** **** **** ${cardNumber.slice(cardNumber.length - 4)}`}</Text>
            : <Text style={styles.cardNumber }>Please enter your card information</Text>
          }
      </View>
        </View>
    </View>

    <View style={styles.checkoutContainer}>
          <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>{`${cart.totalCost.toFixed(2)} euros`}</Text>
          </View>

          <TouchableOpacity
          disabled={!user.address || !user.card}
          testID='pay'
          onPress={() => confirmAndPay(user, cart)}
           style={styles.checkout}>
            <Text style={styles.checkoutText}>CONFIRM AND PAY</Text>
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

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      paymentSuccessfuly,
      updateStockApi
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
