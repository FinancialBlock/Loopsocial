import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import Video from "react-native-video";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";

return (
  <View style={styles.containervideo}>
    <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View>
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

        <View style={styles.uiContainer}>
          <View style={styles.rightcontainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.profilepicontainer}
                source={{
                  imageUri:
                    'https://cdn.vox-cdn.com/thumbor/SEyPwlAyVZy62pmarwy1h89yLt8=/0x4:600x404/1200x800/filters:focal(0x4:600x404)/cdn.vox-cdn.com/photo_images/1347393/23-Oct-10_103931147CP031_Golden_State.jpg',
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onLikePress}>
              <Entypo
                name={'heart'}
                size={40}
              />
              <Text style={styles.statsContainer}> Likes </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome name={'comments'} size={30} color="white" />
              <Text style={styles.statsContainer}> comm </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <MaterialIcons name={'attach-money'} size={40} color="white" />
              <Text style={styles.statsContainer}>tips</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
              <FontAwesome name={'share'} size={40} color="white" />
              <Text style={styles.statsContainer}>shares</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@username</Text>
                <Text style={styles.description}>describe</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={20} color="white" />
                  <Text style={styles.songName}> song me</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/531-5310054_drake-rappers-without-criminal-records-hd-png-download.png',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);
};

export default Post;
