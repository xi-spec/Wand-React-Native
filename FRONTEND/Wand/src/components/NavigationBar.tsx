import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Name } from '../../interface';
import { COLORS, SIZE } from '../constants/theme';

const styles = StyleSheet.create({
  navContainer: {
    paddingTop: 60
  },

  flexRow: {
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40
  },
  icon: {
    color: 'black',
    fontSize: 25

  },
  title: {
    width: '80%',
    fontSize: SIZE.primary,
    textAlign: 'center'
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    marginLeft: 5,
    marginRight: 5,
    margin: 0

  }
});

export default function NavigationBar ({ icon, title }:Name) {
  return (
    <>
<View style={styles.navContainer}>
  <View style={styles.flexRow}>
<TouchableWithoutFeedback>

<Icon
   name={icon}
   style={styles.icon}
  >
  </Icon>

</TouchableWithoutFeedback>
  <Text style={styles.title}>{title} </Text>
    </View>

  {title !== '' && (<TextInput style={styles.line}/>)}
</View>

  </>

  );
}
