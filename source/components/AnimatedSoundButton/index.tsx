import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, Pressable, View} from 'react-native';
import styles from './styles';
interface AnimatedSoundButtonProps {
  onPress: () => void;
  loading: boolean;
}

function AnimatedSoundButton(
  props: AnimatedSoundButtonProps,
): React.JSX.Element {
  const {onPress, loading} = props;

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 360,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: loading ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [loading, opacityAnim]);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Animated.View
          style={{
            ...styles.progress,
            transform: [
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />

        <Animated.View
          style={{
            ...styles.border,
            opacity: opacityAnim,
          }}
        />

        <View style={styles.wrapper}>
          <Image
            source={require('../../ico/volume.png')}
            style={styles.image}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default AnimatedSoundButton;
