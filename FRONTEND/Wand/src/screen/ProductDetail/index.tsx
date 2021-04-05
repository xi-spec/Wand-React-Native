import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadProductDetail
} from '../../redux/actions/productActions';
import { addProductToFavourite } from '../../redux/actions/userActions';
import styles from './styles';
import Swiper from 'react-native-swiper/src';
import BottomSheet from '@gorhom/bottom-sheet';
import Description from './Description/index';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../constants/theme';
import { Product, User } from '../../models/initiaState';

function ProductDetail ({ route, actions, selectedProduct, user, navigation }:
  {navigation:{navigate:Function},
  route:{params:{productId:string}},
  actions:any,
  user: User,
   selectedProduct:Product}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { productId } = route.params;
  const images = selectedProduct.images.alls;
  const [favouriteState, setFavouriteState] = useState((user?.favourite.some(product => product._id === productId)));

  function showAddModal () {
    if (!favouriteState) {
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 2000);
    }
  }

  const addToFavourite = () => {
    if (!user.isLogged) {
      return navigation.navigate('Profile');
    }
    showAddModal();
    setFavouriteState(!favouriteState);
    actions.addProductToFavourite(selectedProduct, user, !favouriteState);
  };

  useEffect(() => {
    actions.loadProductDetail(productId);
  }, []);

  return (

    <View style={{ flex: 1 }}>
    <View style={styles.container}>
       <Swiper
       bounces={false}
       showsButtons={false}
       loadMinimal={true}
       removeClippedSubviews={false}
       key={Math.random() * 99}
       autoplay={false}
       autoplayDirection={false}
       horizontal={false}
       paginationStyle={styles.paginationStyle}
       dotStyle={styles.dotStyle}
       activeDotStyle={styles.activeDotStyle}>
         {images && images.map(image => (
           <ImageBackground
           source={{ uri: image.length > 10 ? image : 'url' }}
           style={styles.image}
           key={Math.random() * 99}>
             <TouchableWithoutFeedback
             testID='heart'
              onPress={() => addToFavourite()} >
               <View style={styles.iconContainer}>
             <Icon name={favouriteState
               ? 'heart'
               : 'heart-o'}
             type='font-awesome'
              color={favouriteState
                ? COLORS.second
                : 'black'}
               size={20} />
               </View>
             </TouchableWithoutFeedback>

             </ ImageBackground>
         ))}
          </Swiper>
    </View>
         <BottomSheet
          snapPoints={['15%', '55%']}>
         <View>
          <Description selectedProduct={selectedProduct} modalVisibleF={modalVisible}/>
         </View>
          </BottomSheet>
    </View>

  );
}

function mapStateToProps ({ products: { selectedProduct }, user }) {
  return { selectedProduct, user };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadProductDetail,
      addProductToFavourite

    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
;
