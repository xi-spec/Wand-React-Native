import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    backgroundColor: COLORS.primary
  },
  logo: {
    width: 150,
    height: 50

  }
});

export default styles;
