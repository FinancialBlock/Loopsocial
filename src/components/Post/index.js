import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.containervideo}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <Video
        source={{
          uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        }}
        style={styles.backgroundVideo}
        controls={false}
        resizeMode={'cover'}
        repeat={true}
        paused={paused}
      />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
