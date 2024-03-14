import {StyleSheet, ViewStyle} from 'react-native';
import PALETTE from '../../core/palette';

const borderStyle = {
  width: 200,
  height: 200,
  position: 'absolute',
  borderWidth: 2,
  borderRadius: 100,
  borderColor: PALETTE.light,
} as ViewStyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    ...borderStyle,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  border: {
    ...borderStyle,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default styles;
