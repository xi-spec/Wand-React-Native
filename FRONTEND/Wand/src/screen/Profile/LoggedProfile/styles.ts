import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZE } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
  },

  imageName: {
    color: 'white',
    fontFamily: FONTS.primaryMedium,
    fontSize: SIZE.big
  },

  imageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary
  },
  locate: {
    paddingVertical: 15,
    flexDirection: 'row'
  },
  welcomeText: {
    paddingTop: 30,
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary
  },
  centerEdit: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  edit: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.0,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    marginVertical: 30
  },
  editText: {
    paddingTop: 3,
    fontSize: SIZE.second,
    fontFamily: FONTS.primaryMedium
  },
  icon: {
    marginLeft: 50
  }
});

export default styles;
