import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30
  },
  main: {
    marginVertical: 25
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textColor: {
    letterSpacing: 0.5,
    color: COLORS.detail,
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.second
  },
  centerContainer: {
    alignItems: 'center'
  },
  stock: {
    textAlign: 'center',
    width: 120,
    backgroundColor: COLORS.green,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },
  outStock: {
    textAlign: 'center',
    width: 120,
    backgroundColor: COLORS.second,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden'

  },
  text: {
    fontFamily: FONTS.primaryMedium,
    fontSize: SIZE.primary
  },
  cost: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.big,
    paddingTop: 15,
    color: COLORS.second
  },
  addButton: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 10,
    fontFamily: FONTS.primary,
    borderRadius: 5
  },
  disabledButton: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
    borderRadius: 5,
    marginTop: 10
  },
  description: {
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: SIZE.primary,
    fontFamily: FONTS.primaryMedium
  },
  title: {
    paddingBottom: 5

  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    marginVertical: 18
  }
});

export default styles;
