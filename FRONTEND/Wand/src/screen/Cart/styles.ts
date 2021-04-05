
import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  list: {
    marginBottom: 100
  },
  shadowBox: {
    height: 200,
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    width: 250,
    height: 150
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8
  },
  detail: {
    fontSize: SIZE.primary,
    fontFamily: FONTS.logoRegular,
    marginBottom: 5,
    paddingTop: 5
  },
  motto: {
    fontSize: SIZE.second,
    fontFamily: FONTS.extraLight,
    marginBottom: 5,
    paddingTop: 5
  },
  cost: {
    width: 200,
    paddingTop: 15,
    fontSize: SIZE.primary,
    color: COLORS.second,
    fontFamily: FONTS.primary
  },
  imageContainer: {
    margin: 5,
    paddingLeft: 10
  },
  image: {
    justifyContent: 'center',
    width: 100,
    height: 150,
    borderRadius: 5

  },
  rightContainer: {
    marginLeft: 180
  },
  chevronContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    paddingTop: 15
  },
  iconLeft: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  },
  quantity: {
    color: COLORS.primary,
    paddingTop: 0.5,
    marginHorizontal: 5
  },

  checkoutContainer: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 10,
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

export default styles
;
