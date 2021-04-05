import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Product } from '../../../models/initiaState';
import SucesellyAddModal from '../SucesellyAddModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../redux/actions/productActions';
import { FAVOURITE_TEXT, CART_TEXT } from '../../../constants/screenTexts';
import setCostValue2Decimals from '../../../utils/setCostValue2Decimals';

function Description ({ selectedProduct, actions, modalVisibleF }:{selectedProduct:Product, actions:any, modalVisibleF:boolean}) {
  const [modalVisible, setModalVisible] = useState(false);

  function showAddModal () {
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000);
  }
  return (
    <View style={styles.container}>
      <SucesellyAddModal modalVisible={modalVisibleF} name={selectedProduct.name} addedText={FAVOURITE_TEXT.ADD_TO_FAVOURITE}/>
      <SucesellyAddModal modalVisible={modalVisible} name={selectedProduct.name} addedText={CART_TEXT.ADD_TO_CART}/>
      <View style={styles.main}>
        <View style={styles.addContainer}>
     <Text style={styles.text}>{selectedProduct.name}</Text>
     <View style={styles.centerContainer}>
     <Text style={selectedProduct.stock ? styles.stock : styles.outStock }>{selectedProduct.stock ? `${selectedProduct.stock} in stock` : 'Out of stock'}</Text>
     </View>

        </View>
     <View style={styles.addContainer}>
     <Text style={styles.cost}>{`${setCostValue2Decimals(selectedProduct.cost.value)} ${selectedProduct.cost.currency}`}</Text>
     <TouchableOpacity
     testID='add'
     disabled={!selectedProduct.stock}
     style={selectedProduct.stock ? styles.addButton : styles.disabledButton}
     onPress={() => { showAddModal(); actions.addProductToCart(selectedProduct); }}>
       <Text style={styles.buttonText}>Add</Text>
     </TouchableOpacity>
     </View>
      </View>
      <View style={styles.description}>
     <Text style={styles.textColor} >{selectedProduct.description}</Text>
     <View style={styles.line}/>
     <Text style={styles.textColor}>{selectedProduct.motto === undefined ? 'What a Nice Day!' : selectedProduct.motto }</Text>
     <View style={styles.line}/>
     <Text style={{ ...styles.text, ...styles.title }}>Product Detail:</Text>
     <Text style={styles.textColor}>{`Materials: ${selectedProduct.material}`}</Text>
     <Text style={styles.textColor}>{`Measurements: ${selectedProduct.measurements}`}</Text>
     <Text style={styles.textColor}>{`Weight: ${selectedProduct.weight.value}${selectedProduct.weight.volum}`}</Text>
     <Text style={styles.textColor}>{`Packaging: ${selectedProduct.Packaging}`}</Text>
     <View style={styles.line}/>
      </View>
    </View>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      addProductToCart
    }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Description)
;
