
import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 10
  },
  detail: {
    fontSize: SIZE.second,
    fontFamily: FONTS.light,
    marginBottom: 5
  },
  imageContainer: {
    margin: 5,
    paddingBottom: 15
  },
  image: {
    justifyContent: 'center',
    width: 190,
    height: 280,
    borderRadius: 5,
    marginBottom: 10

  },
  cost: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.second,
    color: COLORS.second
  }
});

export default styles
;
