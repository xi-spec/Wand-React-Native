import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  register,
  cleanIsExistStatus,
  cleanRegisted
} from '../../redux/actions/userActions';
import {
  hasNameError,
  hasEmailError,
  hasPasswordError,
  hasConfirmPasswordError
} from '../../utils/validation';
import { User } from '../../models/initiaState';
import { ScrollView } from 'react-native-gesture-handler';

function Register ({ user, actions, navigation }:{
  user:User,
  actions:any,
  navigation:{navigate:Function}
}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [nameError, setError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [pdwError, setPdwError] = React.useState(false);
  const [confirmPwdError, setConfirmPdwError] = React.useState(false);

  function isDisabled () {
    return !name ||
      !password ||
      !email ||
      !password ||
      nameError ||
      pdwError ||
      confirmPwdError ||
      emailError;
  };

  return (
    <>
    { user.isExist && Alert.alert('', 'This email has been already used for register, please try again',
      [
        { text: 'OK', onPress: () => actions.cleanIsExistStatus() }
      ])}
      {user.isRegisted && Alert.alert('', 'Registration success! ',
        [
          { text: 'OK', onPress: () => { navigation.navigate('Login'); actions.cleanRegisted(); } }
        ]) }
  <ScrollView
  keyboardShouldPersistTaps='handled'
   style={styles.container} >

    <View >

    <Text style={styles.blueBigText}>
    Hi!
   </Text>

   <Text style={styles.greySmallText}>
  Create a new account
   </Text>
    </View>

    <View style={styles.rowContainer}>

    <TextInput
         placeholderTextColor={COLORS.darkGrey}
         placeholder="Name"
         style={styles.input}
         keyboardType="email-address"
         value={name}
         onChangeText={(text) => setName(text)}
         onEndEditing={() => setError(() => hasNameError(name))}
       >
       </TextInput>
       <View style={styles.errorContainer}>
       {nameError && <Animatable.View animation='fadeInLeft' duration={500}>
       <Text style={styles.wrongMessage}>Name must be at least 2 characters long</Text>
       </Animatable.View>}
       </View>

       <TextInput
         autoCapitalize='none'
         value={email}
         placeholderTextColor={COLORS.darkGrey}
         placeholder="Email Address"
         style={styles.input}
         keyboardType="email-address"
         onChangeText={(text) => setEmail(text)}
         onEndEditing ={() => setEmailError(hasEmailError(email))}
       />
       <View style={styles.errorContainer}>
         {emailError && <Animatable.View animation='fadeInLeft' duration={500}>
       <Text style={styles.wrongMessage}>Email is not valid</Text>
       </Animatable.View>}
         </View>

       <TextInput
         placeholderTextColor={COLORS.darkGrey}
         placeholder="Password"
         style={styles.input}
         secureTextEntry
         value={password}
         onChangeText={(text) => setPassword(text)}
         onEndEditing ={() => setPdwError(() => hasPasswordError(password))}
       />

       <View style={styles.errorContainer}>

       {pdwError && <Animatable.View animation='fadeInLeft' duration={500}>
         <Text style={styles.wrongMessage}>Password must be at least 8 characters long</Text>
         </Animatable.View> }
       </View>

        <TextInput
         placeholderTextColor={COLORS.darkGrey}
         placeholder="Confirm password"
         style={styles.input}
         secureTextEntry
         value={confirmPassword}
         onChangeText={(text) => setConfirmPassword(text)}
         onEndEditing ={() => setConfirmPdwError(() => hasConfirmPasswordError(password, confirmPassword))}
       />
       <View style={styles.errorContainer}>

       {confirmPwdError && <Animatable.View animation='fadeInLeft' duration={500}>
         <Text style={styles.wrongMessage}>Both passwords must be the same </Text>
         </Animatable.View>}
       </View>
       <View style={styles.buttonContainer}>
       <TouchableOpacity
        disabled={isDisabled()}
       style={styles.button}
       testID='register'
       onPress={() => actions.register(email, name, password)}>
           <Text style={styles.buttonText}>REGISTER</Text>
           </ TouchableOpacity>
       </View>
     </View>

</ScrollView>
  </>
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
      register,
      cleanIsExistStatus,
      cleanRegisted
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
