import React from 'react';
import { Text, View } from 'react-native';
import { Order } from '../../../models/initiaState';
import styles from './styles';
import { connect } from 'react-redux';

function OrderHistory ({ orderHistory, navigation }:{orderHistory:Order[], navigation:{navigate:Function}}) {
  function totalIem (params) {
    return params.reduce((acc, product) => acc + product.quantity, 0);
  }

  return (
      <View style={styles.container}>
       {orderHistory && orderHistory.map(order => (
         <View style={styles.shadowBox}key={order._id}>
         <View style={styles.rowContainer}>
         <Text style={styles.title}>Order id:</Text>
         <Text style={styles.text}>{order._id}</Text>
         </View>
         <View style={styles.rowContainer}>
         <Text style={styles.title}>Date:</Text>
         <Text style={{ ...styles.text, marginLeft: 30 }}>{order.creationDate.replace('T', '-')}</Text>
         </View>
         <View style={styles.rowContainer}>
         <Text style={styles.title}>Total item:</Text>
         <Text style={styles.text}>{totalIem(order.cartList)}</Text>
         </View>
         <View style={styles.rowContainer}>
         <Text style={styles.title}>Total cost:</Text>
         <Text style={styles.text}>{`${order.totalCost.toFixed(2)} euros`}</Text>
         </View>
         </View>
       ))}
      </View>
  );
}

function mapStateToProps ({ user: { orderHistory } }) {
  return {
    orderHistory
  };
}
export default connect(mapStateToProps)(OrderHistory);
