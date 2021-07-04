import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';
import {Storage} from 'aws-amplify';
import Profilea from "../../screens/profile2";
import Topbar from '../Top Bar';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ShareExample from "../Share";


const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');

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

  const getVideoUri = async () => {
    if (post.videoUri.startsWith('http')) {
      setVideoUri(post.videoUri);
      return;
    }
    setVideoUri(await Storage.get(post.videoUri));
  };

  useEffect(() => {
    getVideoUri();
  },[]);

  return (




    <View style={styles.container}>
      <Topbar/>

      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />
<View style={styles.profiletop}>
          <Image
            style={styles.profilePicture}
              source={{uri: post.user.imageUri}}
          />


  <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
              <Text style={styles.description}>{post.description}</Text>

             {/* <View style={styles.songRow}>
                <Entypo name={'beamed-note'} size={24} color="white" />
                <Text style={styles.songName}>{post.song.name}</Text>
              </View>*/}
            </View>





          {/*  <Image
              style={styles.songImage}
              source={{uri: post.song.imageUri}}
            />*/}
          </View>
</View>




          <View style={styles.uiContainer}>

            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>

                <AntDesign name={'heart'} size={35} color={isLiked ? 'red' : 'white'} />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <TouchableOpacity>
                <FontAwesome name={'commenting'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.iconContainer}>
                <TouchableOpacity>
                <MaterialIcons name={'attach-money'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                <FontAwesome name={'send'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
                </TouchableOpacity>
              </View>
            </View>

         {/*   <View style={styles.profiletop}>
              <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
            />
            </View>*/}



            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>

                {/*<View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{post.song.name}</Text>
                </View>*/}
              </View>

             {/* <Image
                style={styles.songImage}
                source={{uri: post.song.imageUri}}
              />*/}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
