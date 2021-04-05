import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { User } from '../../../models/initiaState';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default function LoggedProfile ({ user, navigation }:
    {user:User,
    navigation:{navigate:Function}}) {
  return (
      <View style={styles.container}>
          <View style={styles.centerContainer}>

          <View style={styles.imageContainer}>
               <Text style={styles.imageName}>{user.name}</Text>
               </View>
          <Text style={styles.welcomeText}> {`Welcome ${user.name}`}</Text>
          {user.address && <View style={styles.locate}>
          <Icon name="locate-outline" type='ionicon' size={20}/>
          <Text > {`${user.address.street} ${user.address.city} ${user.address.postcode} ${user.address.country}`}</Text>
          </View>
          }
          </View>

          <View style={styles.centerEdit}>
              <TouchableOpacity
              style={styles.edit}>
              <Text style={styles.editText}>Edit Profile</Text>
               <Icon style={styles.icon}name="chevron-right" type='evilicon' size={40}/>
              </TouchableOpacity>

              <TouchableOpacity
               testID='navigation'
              style={styles.edit}
              onPress={() => navigation.navigate('Shipping address')}>
              <Text style={styles.editText}>Shopping address</Text>
               <Icon name="chevron-right" type='evilicon' size={40}/>
              </TouchableOpacity>

              <TouchableOpacity
               testID='navigation'
              style={styles.edit}
              onPress={() => navigation.navigate('Payment method')}>
              <Text style={styles.editText}>Payment method</Text>
               <Icon name="chevron-right" type='evilicon' size={40}/>
              </TouchableOpacity>

              <TouchableOpacity
                 testID='navigation'
              style={styles.edit}
                 onPress={() => navigation.navigate('Order history')}>
              <Text style={styles.editText}>Order history</Text>
               <Icon name="chevron-right" type='evilicon' size={40} />
              </TouchableOpacity>
          </View>

      </View>
  );
}
