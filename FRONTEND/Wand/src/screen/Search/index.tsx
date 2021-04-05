import React, { useEffect, useState } from 'react';
import NotFound from './NotFound';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { SEARCH_TEXT } from '../../constants/screenTexts';
import styles from './styles';
import { Input, Icon } from 'react-native-elements';
import { searchProducts } from '../../redux/actions/productActions';
import FoundList from './FoundList';
import { FilterProducts } from '../../models/initiaState';

function Search ({ navigation, actions, filterProducts }:{navigation:{navigate:Function}, actions:any, filterProducts:FilterProducts}) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const serachTiming = setTimeout(() => actions.searchProducts(search), 350);
    return () => clearTimeout(serachTiming);
  }, [search]);

  return (
    <View style={styles.container}>

<View>
      <Input
      clearButtonMode='always'
      testID='searchInput'
      inputStyle={styles.searchInput}
      autoFocus={true}
      placeholder={SEARCH_TEXT.SEARCH_INPUT}
      onChangeText={text => setSearch(text)}
      value={search}
      leftIcon={<Icon name="search" type="evilicon" color='grey'/>}>
        </ Input>
</View>
{filterProducts.notFound ? <NotFound /> : <FoundList navigation={navigation} foundList ={filterProducts.foundList} /> }

</View>

  );
}

function mapStateToProps ({ products: { filterProducts } }) {
  return {
    filterProducts
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      searchProducts
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
