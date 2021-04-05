import { StyleSheet, Dimensions } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../constants/theme';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.85,
    overflow: 'hidden'
  },
  detail: {
    fontSize: SIZE.second,
    fontFamily: FONTS.logoRegular,
    marginBottom: 5
  },
  imageContainer: {
    margin: 5
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.85

  },
  iconContainer: {
    marginTop: SCREEN_HEIGHT * 0.75,
    marginLeft: SCREEN_WIDTH * 0.88,
    opacity: 0.8,
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#FFFFFE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationStyle: {
    bottom: 6
  },
  dotStyle: {
    backgroundColor: COLORS.lightGrey,
    opacity: 0.4
  },
  activeDotStyle: {
    backgroundColor: COLORS.second
  }
});

export default styles;
