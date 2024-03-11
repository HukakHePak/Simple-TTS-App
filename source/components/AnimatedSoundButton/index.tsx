import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
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

  const rotate = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(rotateAnim, {
      toValue: 359,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    rotate();
  }, [loading]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // transform: `rotate(${rotateAnim})`
      }}>
      {/* <Text>{error as string}</Text> */}
      {/* <Button color="transparent" onPress={console.log} title="Озвучить" /> */}
      <Animated.View style={{}}></Animated.View>
      <Pressable
        onPress={() => {
          // console.log('press');
          onPress();
          // rotate();
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>sound img</Text>

          {/* {isLoading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={styles.buttonText}>Озвучить</Text>
              )} */}
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default AnimatedSoundButton;
