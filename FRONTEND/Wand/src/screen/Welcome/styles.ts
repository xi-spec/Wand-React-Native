import { StyleSheet } from 'react-native';
import { SIZE, COLORS, FONTS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'

  },
  intoduction: {
    flex: 2,
    paddingLeft: 100,
    paddingTop: 330
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: FONTS.logo

  },
  textSmall: {
    paddingTop: 20,
    marginRight: 50,
    color: 'white',
    fontFamily: FONTS.primaryMedium,
    fontSize: SIZE.buttonSize

  },
  buttonContainer: {
    flex: 3,
    paddingTop: 50,
    alignItems: 'center'

  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20

  },
  blueButton: {
    backgroundColor: COLORS.primary
  },
  whiteButton: {
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  buttonText: {
    color: 'white',
    fontSize: SIZE.buttonSize

  },
  laterText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline'
  }
});

export default styles;
