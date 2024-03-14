import {SOUND_URL} from './api';
import {SpeechKey} from '../../env.json';
import TrackPlayer from 'react-native-track-player';

export const play = (text: string, lang = 'en') => {
  const track = {
    url: `${SOUND_URL}/${lang}?text=${text}`,
    headers: {Authorization: SpeechKey},
    contentType: 'audio/mpeg',
    title: 'text',
    artist: 'HukakHePak',
  };

  TrackPlayer.setPlayWhenReady(true);

  TrackPlayer.setVolume(0.7);
  TrackPlayer.setRate(2);

  TrackPlayer.load(track);
};
