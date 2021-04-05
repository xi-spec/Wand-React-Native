import React, { useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from './styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProductsList } from '../../redux/actions/productActions';
import { Product } from '../../models/initiaState';
import setCostValue2Decimals from '../../utils/setCostValue2Decimals';

function ProductsList ({ route, actions, productsList, navigation }:
  {route:{params:{typeName:string}},
   actions:any,
   productsList:Product[],
   navigation:{navigate:Function}}) {
  const { typeName } = route?.params;
  useEffect(() => {
    actions.loadProductsList(typeName);
  }, []);

  return (
        <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.container}
        data={productsList}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) =>
        <TouchableOpacity
        style={styles.imageContainer}
        key={item.name}
        testID='productsList'
        onPress={() => navigation.navigate('Detail', { productId: item._id })}>
      <Image source={{ uri: item.images.alls[0] }}
      style={styles.image}>
        </Image>
        <Text style={styles.detail}>{item.name}</Text>
        <Text style={styles.cost}>{`${setCostValue2Decimals(item.cost.value)} ${item.cost.currency}`}</Text>
      </TouchableOpacity>
        }>
      </FlatList>

  );
}

function mapStateToProps ({ products: { productsList } }) {
  return { productsList };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadProductsList
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
;
