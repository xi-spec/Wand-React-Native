import { StyleSheet, Dimensions } from 'react-native';
import { SIZE, FONTS } from '../../../constants/theme';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.2,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  text: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.second,
    paddingVertical: 20,
    marginHorizontal: 20
  }

});

export default styles;
