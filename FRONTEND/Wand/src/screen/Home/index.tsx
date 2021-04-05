import React, { useEffect } from 'react';
import TypeList from './TypeList';
import NewProducts from './NewProducts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadAllProducts } from '../../redux/actions/productActions';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Params } from '../../models';
import { Products } from '../../models/initiaState';

function Home ({ actions, products, navigation }:{
   navigation: NavigationScreenProp<NavigationRoute<Params>, Params>, actions:any, products:Products}) {
  useEffect(() => {
    actions.loadAllProducts();
  }, [products.allProducts.length]);

  return (

    <ScrollView
    bounces={false}
    showsVerticalScrollIndicator={false}>
    <TypeList navigation={navigation}/>
    <NewProducts navigation={navigation}/>
    </ScrollView>
  );
}

function mapStateToProps ({ products }) {
  return { products };
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadAllProducts
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
;
