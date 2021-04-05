import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZE } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  line: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    marginLeft: 5,
    marginRight: 5

  },
  text: {
    fontSize: SIZE.primary,
    fontFamily: FONTS.logoRegular,
    marginVertical: 20
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 5
  },
  buttonText: {
    fontSize: SIZE.buttonSize,
    fontFamily: FONTS.primary,
    color: 'white'
  }
});

export default styles;
