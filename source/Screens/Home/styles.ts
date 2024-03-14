import {StyleSheet} from 'react-native';
import PALETTE from '../../core/palette';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PALETTE.dark,
    height: '100%',
  },
  flex: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    color: PALETTE.light,
    fontSize: 24,
    height: '100%',
    padding: 20,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: PALETTE.light,
  },
  background: {
    right: 0,
    height: '100%',
    opacity: 0.1,
  },
});

export default styles;
