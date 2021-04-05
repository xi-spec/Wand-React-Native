import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { User } from '../../../models/initiaState';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCard } from '../../../redux/actions/userActions';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function EditPayment ({ user, navigation, actions }:{user:User, navigation:{goBack:Function}, actions:any}) {
  const { cardNumber, securtyCode, cardholder, expiryDate } = user.card || { undefined };

  const [userCardNumber, setUserCardNumber] = useState(cardNumber);
  const [userSecurtyCode, setUserSecurtyCode] = useState(securtyCode);
  const [userCardholder, setCardHoler] = useState(cardholder);
  const [userExpiryDate, setExpiryDate] = useState(expiryDate);
  const [error, setError] = useState(false);

  function apply () {
    userCardNumber.length !== 16 ? setError(true) : setError(false);

    if (userCardNumber.length === 16) {
      return (actions.updateCard(userCardNumber, userSecurtyCode, userCardholder, userExpiryDate, user),
      navigation.goBack()
      );
    }
  }

  return (
    <ScrollView
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={styles.container}>
         <View>

         <Input
         label="Card number"
         containerStyle={styles.input}
         value={userCardNumber}
         onChangeText={(text) => setUserCardNumber(text)}
         placeholder='Card number'
         keyboardType='numeric'>
         </Input>
         {error && <Animatable.Text style={styles.error} animation='fadeInLeft' duration={500}> Please enter a valid card numbers </Animatable.Text>}

         <Input
         label="Security code"
        containerStyle={styles.input}
        value={userSecurtyCode}
        secureTextEntry
        maxLength={3}
        onChangeText={(text) => setUserSecurtyCode(text)}
         placeholder='security code'
         keyboardType='numeric'>
         </Input>

         <Input
         label="Cardholder name"
        containerStyle={styles.input}
        value={userCardholder}
        onChangeText={(text) => setCardHoler(text)}
         placeholder='cardholder name'>
         </Input>

         <Input
         label="Expiry date "
         containerStyle={styles.input}
        value={userExpiryDate}
        onChangeText={(text) => setExpiryDate(text)}
         placeholder='dd/mm/yy'>
         </Input>
         </View>

         <View style={styles.applyContainer}>
          <TouchableOpacity
          testID='apply'
          onPress={() => apply()}
          disabled={!userCardNumber || !userSecurtyCode || !userCardholder || !userExpiryDate}
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
      updateCard
    }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPayment);
