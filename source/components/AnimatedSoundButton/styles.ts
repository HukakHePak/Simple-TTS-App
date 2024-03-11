import {StyleSheet} from 'react-native';
import PALETTE from '../../core/palette';

// background: rgb(41,6,66);
// background: linear-gradient(16deg, rgba(41,6,66,1) 26%, rgba(52,17,104,1) 39%, rgba(61,11,140,1) 66%);

const textStyle = {
  color: PALETTE.light,
  fontSize: 24,
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    backgroundColor: PALETTE.dark,
    // flex: 0.1,
    height: '100%',
    gap: 20,
    padding: 20,
  },
  textInput: {
    ...textStyle,
    height: '100%',
    padding: 20,
    textAlign: 'center',
    // height: 200,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: PALETTE.light,
    color: PALETTE.dark,
    // borderColor: PALETTE.light,
  },
  errorText: {},
  button: {
    width: 200,
    height: 200,

    // borderRadius: '100%',
    // padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: PALETTE.light,
    
  },
  // ['@m']
  buttonText: {
    ...textStyle,
  },
  text: {},
});

export default styles;
