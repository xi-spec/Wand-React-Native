
import { StyleSheet, Dimensions } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../../constants/theme';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.92,
    overflow: 'hidden',
    paddingBottom: 10
  },
  text: {
    fontSize: SIZE.primary,
    margin: 5,
    textAlign: 'center',
    fontFamily: FONTS.logoRegular,
    color: 'white'
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.92
  },
  nameContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.92,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    fontFamily: FONTS.primaryMedium,
    fontSize: 25,
    color: 'white',
    letterSpacing: 5
  },
  seeAlltext: {
    fontFamily: FONTS.primaryMedium,
    fontSize: SIZE.primary,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 50
  },
  paginationStyle: {
    bottom: 6
  },
  dotStyle: {
    backgroundColor: COLORS.lightGrey,
    opacity: 0.4
  },
  activeDotStyle: {
    backgroundColor: COLORS.primary
  },
  textContainer: {
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
;
