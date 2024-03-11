import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
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

const URL = 'https://gtts.note-lawn.ru';

function Home(): React.JSX.Element {
  const [lang, setLang] = useState('ru');
  const [text, setText] = useState('');
  const [sound, setSound] = useState(false);

  const {isLoading, error, data} = useQuery(['voice', sound], () => {
    if (text) {
      setSound(false);

      return fetch(`${URL}/${lang}?text=${text}`, {
        headers: {Authorization: SpeechKey},
      });
    }

    return Promise.reject('Пустой текст');
  });

  useEffect(() => {
    if(data) {
        console.log(data);
        
        
    }
  }, [data]);

  console.log(!!data);

  //   useEffect(() => {
  //     console.log('send request');
  //     fetch(URL)
  //     // fetch(`${URL}/ru?text=hello`, {
  //     //   headers: {Authorization: SpeechKey},
  //     // })
  //       .then(console.log)
  //       .catch(console.log)
  //       .finally(console.log);
  //   }, []);

  //   console.log(isLoading, error);

  //   console.log(data)

  //   console.log(isLoading, error, data);

  

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={PALETTE.dark} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={e => setText(e)}
          />



          <Text>{error as string}</Text>
          <Button color="transparent" onPress={console.log} title="Озвучить" />

          <Pressable style={styles.button} onPress={() => setSound(true)}>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              <Text>Озвучить</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
