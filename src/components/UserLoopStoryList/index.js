import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Story from '../UserLoopStory';
import storys from '../../../data/storys';


const UserLoopStoryList = () => {
  return (
    <View>
      <FlatList data={storys} renderItem={({item}) => <Story story={item} />}
        horizontal
      />

    </View>
  );
};

export default UserLoopStoryList;
