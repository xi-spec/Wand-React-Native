import React from 'react';
import { Text, TouchableOpacity, Image, FlatList, View } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increaseQuantityCart,
  decreaseQuantityCart,
  deleteProductCart
} from '../../redux/actions/productActions';
import EmptyCart from './EmptyCart';
import { ShoppingCart, User } from '../../models/initiaState';
import { COLORS } from '../../constants/theme';

function Cart ({ navigation, cart, actions, user }
  :{cart:ShoppingCart, actions:any,
    navigation:{navigate:Function, reset:Function},
    user:User}) {
  return (
    cart.totalCost === 0
      ? <EmptyCart navigation={navigation}/>
      : <View style={styles.container}>
           <FlatList
           bounces={false}
           style={styles.list}
           data={cart.cartList}
           numColumns={1}
           keyExtractor={(item) => item._id}
           showsVerticalScrollIndicator={false}
           renderItem={({ item }) =>
           <View style={styles.shadowBox}>
           <View style={styles.cartContainer}>
             <TouchableOpacity
             style={styles.imageContainer}
             key={item.name}
             testID='productImage'
             onPress={() => navigation.navigate('Detail', { productId: item._id })}>
           <Image source={{ uri: item.images.alls[0] }}
           style={styles.image} />
             </TouchableOpacity>
             <View style={styles.textContainer}>
               <View style={styles.titleContainer}>
             <Text style={styles.detail}>{item.name}</Text>
             <TouchableOpacity
           onPress={() => actions.deleteProductCart(item._id, item.quantity)}
           testID='delete'
           >
             <Icon name='close-outline' type="ionicon"></Icon>
           </TouchableOpacity>
               </View>
             <Text style={styles.motto}>{item.motto ? item.motto : 'What a Nice Day!' }</Text>

             <View style={styles.rightContainer}>
             <Text style={{ ...styles.detail, ...styles.cost }}>{`${item.cost.value.toFixed(2)} ${item.cost.currency}`}</Text>
             <View style={styles.chevronContainer}>
               <TouchableOpacity
               testID='decrease'
               disabled={item.quantity === 1}
               onPress={() => actions.decreaseQuantityCart(item._id, item.stock)}>
             <Icon style={styles.iconLeft} name="remove-circle-outline" type='ionicon' size={20} color={COLORS.primary}/>
               </TouchableOpacity>
             <Text style={{ ...styles.detail, ...styles.quantity }}>{item.quantity}</Text>
             <TouchableOpacity
                  testID='increase'
             onPress={() => actions.increaseQuantityCart(item._id, item.stock)}
             disabled={!item.stock}
             >
             <Icon style={styles.iconRight} name="add-circle-outline" type='ionicon' size={20} color={COLORS.primary}/>
             </TouchableOpacity>

             </View>
             </View>
             </View>
         <View>
         </View>
           </View>
           </View>

             }>
        </FlatList>
        <View style={styles.checkoutContainer}>
          <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>{`${cart.totalCost.toFixed(2)} euros`}</Text>
          </View>

          <TouchableOpacity
          testID='checkout'
          onPress={() => user.isLogged ? navigation.navigate('Checkout') : navigation.navigate('Profile')}
           style={styles.checkout}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
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
      increaseQuantityCart,
      decreaseQuantityCart,
      deleteProductCart
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
