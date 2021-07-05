import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '../../graphql/queries';
import Story from '../../components/UserLoopStory';
import UserLoopStoryList from '../../components/UserLoopStoryList';

const Storyparent = () => {
  const [story, setPosts] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      //fetch all the post
      try {
        const response = await API.graphql(graphqlOperation(listStorys));
        setPosts(response.data.listStorys.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost();
  }, []);

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <UserLoopStoryList/>
      </ScrollView>
    </View>
  );
};

export default Storyparent;
