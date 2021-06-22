import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from "../../components/Post";

const Home = () => {
  return (
    <View>
      <Post />
    </View>
  );
};

export default Home;
