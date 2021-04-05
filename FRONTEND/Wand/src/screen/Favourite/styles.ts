
import { StyleSheet } from 'react-native';
import { SIZE, FONTS, COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 10
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
  listContainer: {
    flexDirection: 'row'
  },
  textContainer: {

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
    paddingTop: 5
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  remove: {
    paddingBottom: 45,
    paddingLeft: 90
  },
  cost: {
    marginLeft: 50,
    paddingBottom: 15,
    fontSize: SIZE.primary,
    color: COLORS.second,
    fontFamily: FONTS.primary
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    width: '60%'
  },
  columText: {
    marginLeft: 10
  },
  image: {
    justifyContent: 'center',
    width: 100,
    height: 150,
    borderRadius: 5

  },

  addContainer: {
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    alignContent: 'center',
    borderRadius: 5
  },
  disabled: {
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
    alignContent: 'center',
    borderRadius: 5
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  totalText: {
    fontSize: SIZE.primary,
    fontFamily: FONTS.primary
  },
  addtext: {
    color: 'white',
    fontFamily: FONTS.primary,
    fontSize: SIZE.second

  }

});

export default styles
;
