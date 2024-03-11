import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Animated,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import {useQuery} from 'react-query';
import {SpeechKey} from '../../../env.json';
import PALETTE from '../../core/palette';
import AnimatedSoundButton from '../../components/AnimatedSoundButton';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

const URL = 'https://gtts.note-lawn.ru';

function Home(): React.JSX.Element {
  const [lang, setLang] = useState('ru');
  const [text, setText] = useState('');
  // const [sound, setSound] = useState(false);

  const {state} = usePlaybackState();

  // playbackState.state

  const playHandler = async () => {
    // const track = await fetch(`${URL}/${lang}?text=${text}`, {
    //   headers: {Authorization: SpeechKey},
    // // }).then(console.log);
    // }).then(res => res.);
    // // });

    // console.log(track);

    // TrackPlayer.add({
    //   url: `${URL}/${lang}?text=${text}`, // Load media from the network
    //   headers: {Authorization: SpeechKey},
    //   // url: track,
    //   contentType: 'audio/mpeg',
    //   title: 'text',
    //   artist: 'HukakHePak',
    // })
    //   .then(console.log)
    const track = {
      url: `${URL}/${lang}?text=${text}`, // Load media from the network
      headers: {Authorization: SpeechKey},
      // url: track,
      contentType: 'audio/mpeg',
      title: 'text',
      artist: 'HukakHePak',
    };


    TrackPlayer.setPlayWhenReady(true);

    // TrackPlayer.setVolume(1);
    TrackPlayer.setRate(2);

    await TrackPlayer.load(track);

    // TrackPlayer.play();

    // .then(e => {
    //   TrackPlayer.play().then(console.log).catch(console.log);
    // });
    // .catch(console.log);
    // TrackPlayer.reset();

    // console.log();
  };

  console.log(state);

  const isLoading = state === State.Loading;

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={PALETTE.dark} />

      <View style={styles.container}>
        {/* <View> */}
        <View style={{flex: 1}}>
          <TextInput
            style={styles.textInput}
            value={text}
            // numberOfLines={16}
            multiline
            allowFontScaling={false}
            onChangeText={e => setText(e)}
          />
        </View>

        {/* <View> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isLoading ? 'red' : 'transparent',
          }}>
          <AnimatedSoundButton onPress={playHandler} loading={isLoading} />
          {/* <Pressable
            onPress={() => {
              // console.log('press');
              setSound(true);
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>sound img</Text>

              {isLoading ? (
                <ActivityIndicator size="large" />
              ) : (
                <Text style={styles.buttonText}>Озвучить</Text>
              )}
            </View>
          </Pressable> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
