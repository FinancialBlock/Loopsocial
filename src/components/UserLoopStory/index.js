import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {Storage} from "aws-amplify";
import Profilea from '../../screens/profile2';
import Topbar from '../Top Bar';

import Video from 'react-native-video';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Story = props => {
  const [story, setStory] = useState(props.story);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');

  const navigation = useNavigation();

  const onPress = () => {
    // naviate to story screen
    navigation.navigate('Story');
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setStory({
      ...story,
      likes: story.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const getVideoUri = async () => {
    if (story.videoUri.startsWith('http')) {
      setVideoUri(story.videoUri);
      return;
    }
    setVideoUri(await Storage.get(story.videoUri));
  };

  useEffect(() => {
    getVideoUri();
  }, [getVideoUri]);

  return (

      <TouchableOpacity onPress={onPress} style={styles.storyContainer}>
        <View style={styles.storyContainer}>
          <Image
            style={styles.profileImagestorys}
            source={{uri: story.user.imageUri}}
          />
          <Text style={styles.handle}>{story.user.username}</Text>
          </View>
      </TouchableOpacity>

  );
};

export default Story;
