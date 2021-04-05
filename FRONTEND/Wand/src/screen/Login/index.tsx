import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, cleanLoginError } from '../../redux/actions/userActions';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import { User } from '../../models/initiaState';

function Login ({ actions, user, navigation }:
  {actions:any,
   navigation:{navigate:Function, reset:Function},
    user:User}) {
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user.isLogged) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      });
    }
  }, [user.isLogged]);
  return (

  <ScrollView style={styles.container}>
    { user.loginError
      ? Alert.alert('', 'email or password is wrong!', [
        {
          text: 'OK',
          onPress: () => actions.cleanLoginError()
        }
      ])
      : null}
    <View >
    <Text style={styles.blueBigText}>
    Welcome!
   </Text>

   <Text style={styles.greySmallText}>
   Sign in to continue
   </Text>
    </View>

    <View style={styles.inputContainer}>
        <TextInput style={styles.input}
         testID='emailInput'
        placeholder="Email"
        placeholderTextColor={COLORS.darkGrey}
        value={email}
        onChangeText={text => setEmail(text.toLowerCase())}
        autoCapitalize='none'
        >

        </TextInput>
        <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.darkGrey}
        secureTextEntry={true}
        value={password}
        testID='passwordInput'
        onChangeText={text => setPassword(text)}
        >

        </TextInput>
    </View>

   <View style={styles.buttonContainer}>
  <TouchableOpacity
   testID='login'
    style={styles.button}
    onPress={() => actions.login(email, password)}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
   </View>

  <View style={styles.lineContainer}>
    <TextInput style={styles.line}/>
    <Text style={styles.orText}>o</Text>

    <TextInput style={styles.line}/>
  </View>

<TouchableOpacity style={styles.centerContainer}>
<Image source={{ uri: IMAGES.apple }} style={styles.apple}></Image>
</TouchableOpacity>

</ScrollView>
  );
}

function mapStateToProps ({ user }) {
  return { user };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      login,
      cleanLoginError
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
