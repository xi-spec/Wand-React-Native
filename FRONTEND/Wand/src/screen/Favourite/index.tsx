import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import EmptyFavourite from './EmptyFavourite';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { User } from '../../models/initiaState';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../../redux/actions/productActions';
import { removeFavourite } from '../../redux/actions/userActions';
import setCostValue2Decimals from '../../utils/setCostValue2Decimals';

function Favourite ({ navigation, user, actions }:{navigation:{navigate:Function, reset:Function}, user:User, actions:any}) {
  const totalCost = () => {
    return user.favourite.reduce((acc, product) => acc + product.cost.value, 0).toFixed(2);
  };
  return (
    user.favourite.length === 0
      ? <EmptyFavourite navigation={navigation}/>
      : <View style={styles.container}>

      <FlatList
      bounces={false}
      data={user.favourite}
      numColumns={1}
      keyExtractor={(item) => item._id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) =>
      <View style={styles.shadowBox}>
      <View style={styles.listContainer}>
        <TouchableOpacity
        style={styles.imageContainer}
        key={Math.random() * 99}
        testID='favourite'
        onPress={() => navigation.navigate('Detail', { productId: item._id })}>
      <Image source={{ uri: item.images.alls[0] }}
      style={styles.image} />
          <View style={styles.columText}>
        <Text style={styles.detail}>{item.name}</Text>
        <Text style={styles.motto}> What a Nice Day!</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.textContainer}>
        <TouchableOpacity
        testID='remove'
        style={styles.remove}
        onPress={() => actions.removeFavourite(item, user)}>
               <Icon name='close-outline' type="ionicon"></Icon>
             </TouchableOpacity>
             <Text style={styles.cost}>{`${setCostValue2Decimals(item.cost.value)} ${item.cost.currency}`}</Text>
        <TouchableOpacity
        testID='add'
        disabled={!item.stock}
        onPress={() => { actions.addProductToCart(item); actions.removeFavourite(item, user); }}
        style={ item.stock ? styles.addContainer : styles.disabled}>
              <Text style={styles.addtext}>ADD TO CART</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
        }>
   </FlatList>
   <View style={styles.totalContainer}>
           <Text style={styles.totalText}>{`${user.favourite.length} items`}</Text>
           <Text style={styles.totalText}>{`${totalCost()} euros`}</Text>
   </View>
   </ View >

  );
}

function mapStateToProps ({ user }) {
  return {
    user
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      addProductToCart,
      removeFavourite
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
