import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { User } from '../../../models/initiaState';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAddress } from '../../../redux/actions/userActions';
import { Input } from 'react-native-elements';

function EditAddress ({ user, navigation, actions }:
  {user:User, navigation:{goBack:Function}, actions:any}) {
  const { street, country, city, postcode } = user.address || { undefined };
  const [userStreet, setStreet] = useState(street);
  const [userCountry, setCountry] = useState(country);
  const [userCity, setCity] = useState(city);
  const [userPostcode, setPostcode] = useState(postcode);

  return (
           <ScrollView
           contentContainerStyle={styles.container}
    keyboardShouldPersistTaps='handled'>
         <View>

         <Input
         containerStyle={styles.input}
         inputStyle={{ width: '100%' }}
         label="Street"
         placeholder="street"
         value={userStreet}
         onChangeText={(text) => setStreet(text)}
         autoCompleteType='street-address'>
         </Input>

         <Input
         containerStyle={styles.input}
        value={userCity}
        onChangeText={(text) => setCity(text)}
        label="City"
         placeholder='city'>
         </Input>

         <Input
         containerStyle={styles.input}
        value={userCountry}
        onChangeText={(text) => setCountry(text)}
        label="Country"
         placeholder='country'>
         </Input>

         <Input
          containerStyle={styles.input}
        value={userPostcode}
        onChangeText={(text) => setPostcode(text)}
        label="Zip/Postcode"
         placeholder='zip/postcode'
         autoCompleteType='postal-code'
         keyboardType='numeric'>
         </Input>
         </View>

         <View style={styles.applyContainer}>
          <TouchableOpacity
          testID="apply"
          onPress={() => { actions.updateAddress(userStreet, userCity, userCountry, userPostcode, user); navigation.goBack(); }}
          disabled={!userStreet || !userCountry || !userCity || !userPostcode}
           style={styles.apply}>
            <Text style={styles.applyText}>APPLY</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
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
      updateAddress
    }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
