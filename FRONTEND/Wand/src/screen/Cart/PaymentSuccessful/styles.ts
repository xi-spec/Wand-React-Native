import { StyleSheet } from 'react-native';
import { COLORS, SIZE, FONTS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height: '100%',
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  image: {
    marginTop: '20%',
    width: 250,
    height: 250,
    marginBottom: '10%'
  },
  tittle: {
    fontFamily: FONTS.primaryMedium,
    fontSize: SIZE.big
  },
  textContainer: {
    marginTop: '10%'
  },
  text: {
    fontFamily: FONTS.extraLight,
    fontSize: SIZE.primary
  },
  thanks: {
    marginTop: '10%',
    fontFamily: FONTS.extraLight,
    fontSize: SIZE.primary
  },
  continueContainer: {
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'white'
  },
  continue: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5
  },
  continueText: {
    color: 'white',
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary

  }
});

export default styles;
