import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  listContainer: {
    margin: 10
  },
  detail: {
    fontSize: SIZE.second,
    fontFamily: FONTS.light,
    marginBottom: 5
  },
  imageContainer: {
    margin: 5
  },
  image: {
    justifyContent: 'center',
    width: 190,
    height: 300,
    borderRadius: 5,
    marginBottom: 10
  },
  cost: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.second,
    color: COLORS.second,
    marginBottom: 10
  }
});

export default styles;
