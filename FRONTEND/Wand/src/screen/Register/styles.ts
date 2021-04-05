import { StyleSheet } from 'react-native';

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
  rowContainer: {
    width: '100%',
    height: '70%'
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
    marginBottom: 10,
    marginTop: 10

  },
  errorContainer: {
    height: 15
  },
  wrongMessage: {
    fontSize: 12, color: COLORS.second
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 30

  },
  button: {
    width: '100%',
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
  }

});

export default styles;
