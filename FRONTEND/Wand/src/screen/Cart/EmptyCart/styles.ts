import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZE, FONTS } from '../../../constants/theme';

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
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.second,
    paddingVertical: 20,
    marginHorizontal: 20
  },

  buttonsContainer: {
    width: '90%',
    height: 80,
    position: 'absolute',
    bottom: height * 0.20,
    backgroundColor: 'white'
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5

  },
  buttonText: {
    color: 'white',
    fontFamily: FONTS.primary,
    fontSize: SIZE.primary
  },
  colorButton: {
    backgroundColor: COLORS.primary
  },
  whiteButton: {
    borderWidth: 1

  },
  blackText: {
    color: 'black'
  }
});

export default styles;
