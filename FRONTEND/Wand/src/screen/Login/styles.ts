
import {
  StyleSheet

} from 'react-native';
import {
  COLORS,
  SIZE
} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 50
  },

  blueBigText: {
    color: COLORS.primary,
    fontSize: 36,
    marginBottom: 5

  },
  greySmallText: {
    color: COLORS.darkGrey,
    fontSize: SIZE.primary
  },
  inputContainer: {
    paddingTop: 50
  },
  input: {
    width: 300,
    height: 50,
    fontSize: SIZE.primary,
    color: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGrey,
    marginBottom: 30,
    marginTop: 20

  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 70

  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZE.primary,
    backgroundColor: COLORS.primary

  },

  buttonText: {
    color: 'white',
    fontSize: SIZE.buttonSize
  },

  lineContainer: {
    paddingTop: 20,
    flexDirection: 'row'
  },
  line: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    marginLeft: 5,
    marginRight: 5

  },
  orText: {
    color: COLORS.darkGrey,
    top: 7
  },

  centerContainer: {
    alignItems: 'center',
    paddingTop: 50
  },
  apple: {
    width: 50,
    height: 50
  }
});

export default styles
;
