import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from "../../components/Post";

const post1 = {
  id: 'p1',
  user: {
    id: 'u4',
    username: 'bigblock',
    imageUri:
      'https://cdn.vox-cdn.com/thumbor/SEyPwlAyVZy62pmarwy1h89yLt8=/0x4:600x404/1200x800/filters:focal(0x4:600x404)/cdn.vox-cdn.com/photo_images/1347393/23-Oct-10_103931147CP031_Golden_State.jpg',
},
  description: 'haha oh bo',
  songName: 'drizzy drake',
  songimageUri:
    'https://cdn.vox-cdn.com/thumbor/SEyPwlAyVZy62pmarwy1h89yLt8=/0x4:600x404/1200x800/filters:focal(0x4:600x404)/cdn.vox-cdn.com/photo_images/1347393/23-Oct-10_103931147CP031_Golden_State.jpg',
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  likes: 100,
  comments: 12,
  shares: 44,
  tips: 100,
}

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
