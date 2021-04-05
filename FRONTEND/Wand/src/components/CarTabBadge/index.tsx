import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

function CartTabBarBadge ({ cartList }:any) {
  return (
    cartList.length > 0 ? <Text style={{ color: 'white' }}>{cartList.length}</Text> : null

  );
}

function mapStateToProps ({ cart: { cartList } }) {
  return {
    cartList
  };
}

export default connect(mapStateToProps, null)(CartTabBarBadge);
