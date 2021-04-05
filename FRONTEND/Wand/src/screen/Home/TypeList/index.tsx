import React, { useEffect } from 'react';
import {
  Text,
  ImageBackground,
  View

} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadProductsType
} from '../../../redux/actions/productActions';
import styles from './styles';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Params } from '../../../models';
import { ProductType } from '../../../models/initiaState';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper/src';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function TypeList ({ actions, productsType, navigation }:{
  navigation: NavigationScreenProp<NavigationRoute<Params>, Params>, actions:any, productsType:ProductType[]}) {
  useEffect(() => {
    actions.loadProductsType();
  }, []);
  return (

  <View style={{ flex: 1 }}>
    <View style={styles.container}>
   <Swiper
       bounces={false}
       showsButtons={false}
       removeClippedSubviews={false}
       key={Math.random() * 99}
       autoplay={true}
       autoplayDirection={true}
       paginationStyle={styles.paginationStyle}
       dotStyle={styles.dotStyle}
       activeDotStyle={styles.activeDotStyle}>
         {productsType && productsType.map(type => (
           <TouchableWithoutFeedback
           testID='navigation'
           onPress={() => navigation.navigate('List', { typeName: type.name })}
           key={Math.random() * 99}>
           <ImageBackground
           source={{ uri: type.image }}
           style={styles.image}>
             <View style={styles.nameContainer}>
             <Text style={styles.nameText}>{type.name.toUpperCase()}</Text>
             <Animatable.Text duration={800} animation="pulse" easing="ease-in" iterationCount="infinite" style={styles.seeAlltext}>SEE ALL</Animatable.Text>
             </View>
             </ ImageBackground>
           </TouchableWithoutFeedback>
         ))}
          </Swiper>
          <View style={styles.textContainer}>
          <Text style={styles.text}>WELCOME TO WAND SHOP</Text>
          </View>
    </View>
</View>
  );
}

function mapStateToProps ({ productsType }) {
  return { productsType };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadProductsType
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeList)
;
