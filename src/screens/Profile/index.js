import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {createUser} from '../../graphql/mutations';
import styles from './styles';
import {FAB} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import posts from '../../../data/posts';
import {listPosts} from '../../graphql/queries';
import {Image} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {red} from 'react-native-reanimated/src/reanimated2/Colors';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <SimpleLineIcons style={styles.present} name={'present'} size={30} />
        <ImageBackground
          style={styles.profilepicontainer}
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
          }}
        />
        <View style={styles.dm}>
          <Entypo name="new-message" size={18} color="#DFD8C8" />
        </View>
        <Text style={styles.headername}> The Golden Child </Text>
        <Text style={styles.username}> @Blockchainb </Text>
        <Text style={styles.followtext}>
          {' '}
          This is my bio and how I feel about my life{' '}
        </Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
            ]}>
            <Text style={[styles.text, {fontSize: 24}]}>45,844</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>302</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
            ]}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 24}]}>10,000</Text>
              <Text style={[styles.text, styles.subText]}>Views</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoWrapper}>
          <TouchableOpacity>
            <View style={styles.userInfoItem}>
              <Entypo
                style={styles.userInfoTitle}
                name={'documents'}
                size={30}
                color="black"
              />
              <Text style={styles.userInfoSubTitle}>For Public</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.userInfoItem}>
              <Entypo
                style={styles.userInfoTitle}
                name={'lock'}
                size={30}
                color="black"
                alignSelf={'center'}
              />
              <Text style={styles.userInfoSubTitle}>For Private</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
