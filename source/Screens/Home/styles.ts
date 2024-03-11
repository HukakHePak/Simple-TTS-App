import {StyleSheet} from 'react-native';
import PALETTE from '../../core/palette';

// background: rgb(41,6,66);
// background: linear-gradient(16deg, rgba(41,6,66,1) 26%, rgba(52,17,104,1) 39%, rgba(61,11,140,1) 66%);

const styles = StyleSheet.create({
  container: {
    backgroundColor: PALETTE.dark,
    height: '100%',
  },
  wrapper: {
    flex: 1,
  },
  textInput: {
    minHeight: '50%',
  },
  errorText: {},
  button: {},
  text: {},
});

export default styles;
