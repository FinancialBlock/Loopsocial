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

const Post = props => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };
  const onCommentPress = () => {
    setPost({
      ...post,
      comments: post.comments + 1,
    });
  };

  return (
    <View style={styles.containervideo}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            controls={false}
            style={styles.backgroundVideo}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
            ref={ref => {
              this.player = ref;
            }}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightcontainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.profilepicontainer}
                  source={{uri: post.user.imageUri}}
                />
              </View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <Entypo
                  name={'heart'}
                  size={40}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.statsContainer}>{post.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onCommentPress}>
                <FontAwesome name={'comments'} size={40} color="white" />
                <Text style={styles.statsContainer}>{post.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <MaterialIcons name={'attach-money'} size={40} color="white" />
                <Text style={styles.statsContainer}>${post.tips}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'share'} size={40} color="white" />
                <Text style={styles.statsContainer}>{post.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomcontainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={20} color="white" />
                  <Text style={styles.songName}>{post.song.name}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: post.song.imageUri,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
