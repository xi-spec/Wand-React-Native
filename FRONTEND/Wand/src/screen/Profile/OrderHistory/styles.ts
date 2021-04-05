import { StyleSheet } from 'react-native';
import { FONTS, SIZE } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  shadowBox: {
    width: '90%',
    height: '15%',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5
  },
  rowContainer: {
    flexDirection: 'row'
  },
  title: {
    fontFamily: FONTS.primaryMedium,
    fontSize: 16,
    marginHorizontal: 20
  },
  text: {
    fontFamily: FONTS.primary,
    fontSize: SIZE.second
  }

});

export default styles;
