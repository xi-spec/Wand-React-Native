import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Params } from '../../../models';
import { Product } from '../../../models/initiaState';
import setCostValue2Decimals from '../../../utils/setCostValue2Decimals';

function NewProducts ({ allProducts, navigation }:{
  navigation: NavigationScreenProp<NavigationRoute<Params>, Params>, allProducts:Product[]}) {
  const randNum = Math.floor(Math.random() * 14);
  const newPrdocuts = allProducts.slice(randNum, randNum + 6);

  return (
    <View style={styles.container}>
   <Text style={styles.text}>
     New arrivals
   </Text>
    <ScrollView
    bounces={false}
    horizontal={true}
    showsHorizontalScrollIndicator={false} >
   {newPrdocuts && newPrdocuts.map((product) => (
     <View
     key={Math.random() * 10}>

    <TouchableOpacity
    style={styles.imageContainer}

    testID='newProduts'
    onPress={
      () =>
        navigation.navigate('Detail', { productId: product._id })
    }>
  <Image source={{ uri: product.images.alls[0] }}
  style={styles.image}>
    </Image>
    <Text style={styles.detail}>{product.name}</Text>
    <Text style={styles.cost}>{`${setCostValue2Decimals(product.cost.value)} ${product.cost.currency}`}</Text>
  </TouchableOpacity>
     </View>

   ))}
  </ScrollView>
  </View>

  );
}

function mapStateToProps ({ products: { allProducts } }) {
  return { allProducts };
}

export default connect(mapStateToProps, null)(NewProducts);
