import { StyleSheet } from 'react-native';
import { COLORS, SIZE, FONTS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    marginBottom: 40,
    marginTop: 10,
    borderRadius: 5
  },
  error: {
    position: 'absolute',
    color: 'red',
    marginLeft: 10,
    top: 70
  },
  applyContainer: {
    position: 'absolute',
    width: '100%',
    height: 30,
    bottom: 20,
    backgroundColor: 'white'
  },
  apply: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5
  },
  applyText: {
    color: 'white',
    fontFamily: FONTS.logoRegular,
    fontSize: SIZE.primary

  }
});

export default styles;
