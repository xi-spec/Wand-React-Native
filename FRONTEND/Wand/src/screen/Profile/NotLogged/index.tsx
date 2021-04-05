import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function NotLogged ({ navigation }:{navigation:{navigate:Function}}) {
  return (
      <View style={styles.container}>

        <Text style={styles.text}>
            I alredy have a user account
        </Text>

        <TouchableOpacity
        testID='login'
        style ={styles.buttonContainer}
         onPress={() => navigation.navigate('Login')}>
            <Text style ={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
<View style={styles.line}></View>
        <Text style={styles.text}>
           New user
        </Text>

        <TouchableOpacity
         testID='register'
        style ={styles.buttonContainer}
         onPress={() => navigation.navigate('Register')}>
            <Text style ={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

      </View>
  );
}
