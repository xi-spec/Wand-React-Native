import { StyleSheet } from 'react-native';
import { COLORS, SIZE, FONTS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  shippingContainer: {
    marginTop: 20,
    marginHorizontal: 30
  },
  titleText: {
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary
  },
  edit: {
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary,
    color: COLORS.primary
  },
  text: {
    width: 250,
    fontSize: SIZE.second,
    fontFamily: FONTS.primary
  },
  shadowBox: {
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 5
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
  icon: {
    marginRight: 10
  },
  card: {
    width: 80,
    height: 50,
    borderRadius: 5,
    marginRight: 30
  },
  cardNumber: {
    width: 150,
    paddingTop: 20
  },
  checkoutContainer: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'white'
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  totalText: {
    fontSize: SIZE.primary,
    fontFamily: FONTS.primary
  },
  checkout: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.second,
    borderRadius: 5
  },
  checkoutText: {
    color: 'white',
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary

  }
});

export default styles;
