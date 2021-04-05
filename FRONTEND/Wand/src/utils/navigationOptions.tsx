import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { FONTS, SIZE } from '../constants/theme';

export const homeOptions = {
  headerTitle: 'Wand',
  headerTitleStyle: {
    fontSize: SIZE.extraBig,
    paddingBottom: 10,
    fontFamily: FONTS.logo,
    color: 'white'
  },
  headerTransparent: true

};

export const titleOptions = {
  headerTintColor: 'black',
  headerTitleStyle: {
    fontSize: SIZE.headerTitle,
    paddingBottom: 10,
    fontFamily: FONTS.logoRegular
  }
};

const icon = (navigation) => (
    <TouchableOpacity onPress={navigation.goBack}>
    <Icon name="chevron-left" type='evilicon' size={40}/>
        </TouchableOpacity>
);

export const listOptions = ({ route, navigation }) => {
  const { typeName } = route.params;
  return {
    headerTitle: typeName,
    headerTintColor: 'black',
    headerLeftContainerStyle: {
      paddingLeft: 30,
      paddingBottom: 5
    },
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: SIZE.headerTitle,
      paddingBottom: 10,
      fontFamily: FONTS.logoRegular
    },
    headerLeft: () => icon(navigation)
  };
};

export const genaralOptions = ({ navigation }) => {
  return {
    headerTintColor: 'black',
    headerLeftContainerStyle: {
      paddingLeft: 30,
      paddingBottom: 5
    },
    headerBackTitleVisible: false,
    headerTitleStyle: {
      fontSize: SIZE.headerTitle,
      paddingBottom: 10,
      fontFamily: FONTS.logoRegular
    },
    headerLeft: () => icon(navigation)

  };
};

export const detailOption = ({ navigation }) => {
  return {
    headerTitle: '',
    headerTransparent: true,
    headerTintColor: 'black',
    headerLeftContainerStyle: {
      paddingLeft: 30,
      paddingBottom: 5
    },
    headerBackTitleVisible: false,
    headerTitleStyle: {
      paddingBottom: 10
    },
    headerLeft: () => icon(navigation)

  };
};
