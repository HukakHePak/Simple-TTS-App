import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';
import PALETTE from '../../core/palette';
import AnimatedSoundButton from '../../components/AnimatedSoundButton';
import Background from '../../components/Background';
import {play} from '../../core/play';
import {State, usePlaybackState} from 'react-native-track-player';

function Home(): React.JSX.Element {
  const [text, setText] = useState('');

  const {state} = usePlaybackState();

  const screen = useWindowDimensions();

  const playHandler = async () => {
    play(text);
    Keyboard.dismiss();
  };

  const isLoading = [State.Loading, State.Buffering].includes(state as State);

  const isVertical = screen.height > screen.width;

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={PALETTE.dark} />
      <View
        style={{
          ...styles.container,
          flexDirection: isVertical ? 'column' : 'row',
        }}>
        <Background
          source={require('../../ico/geoxor.jpg')}
          style={styles.background}
        />
        <View style={styles.flex}>
          <TextInput
            style={styles.textInput}
            value={text}
            multiline
            allowFontScaling={false}
            onChangeText={e => setText(e)}
          />
        </View>

        <View style={styles.flex}>
          <AnimatedSoundButton onPress={playHandler} loading={isLoading} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
