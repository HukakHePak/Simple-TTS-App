import React from 'react';
import {Image, ImageProps} from 'react-native';
import styles from './styles';

function Background(props: ImageProps): React.JSX.Element {
  return (
    <Image {...props} style={{...styles.image, ...(props.style as Object)}} />
  );
}

export default Background;
