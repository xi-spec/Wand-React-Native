
import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    margin: 10,
    paddingBottom: 50
  },
  text: {
    fontSize: SIZE.primary,
    margin: 10,
    fontFamily: FONTS.logoRegular
  },
  imageContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  image: {
    justifyContent: 'center',
    width: 170,
    height: 250,
    borderRadius: 5

  },
  detail: {
    fontFamily: FONTS.light,
    fontSize: SIZE.second
  },
  cost: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.second,
    color: COLORS.second
  }

});

export default styles
;
