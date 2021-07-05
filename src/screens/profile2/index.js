import React, {useEffect, useState} from 'react';
import Inbox from '../Inbox';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Post from '../../components/Post';
import {createUser} from '../../graphql/mutations';
import {FAB} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feed from '../.././components/Feed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../Home';
import { API, graphqlOperation } from 'aws-amplify';
import posts from '../../../data/posts';
import {listPosts} from '../../graphql/queries';
import {listUsers} from '../../graphql/queries';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {red} from 'react-native-reanimated/src/reanimated2/Colors';
import { UserAgent } from "amazon-cognito-identity-js";







const Profile = (props) => {



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Entypo name="arrow-with-circle-left" size={24} color="#52575D" />
          <Entypo name="dots-three-horizontal" size={24} color="#52575D" />
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <ImageBackground
              style={styles.profileImage}
              source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
              }}
            />
          </View>
          <View style={styles.dm}>
            <TouchableOpacity>
              <MaterialIcons name="chat" size={18} color="#DFD8C8" />
            </TouchableOpacity>
          </View>
          <View style={styles.active} />
          <TouchableOpacity>
            <View style={styles.add}>
              <AntDesign
                name="pluscircle"
                size={48}
                color="#185ADB"
                style={{marginTop: 6, marginLeft: 2}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: 'bold', fontSize: 36}]}>
            @Blockchainb
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            I love to take photos and learn movies
          </Text>
        </View>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Text style={styles.userBtnTxt}>Subscribe</Text>
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
              <Text style={[styles.text, {fontSize: 24}]}>6,000</Text>
              <Text style={[styles.text, styles.subText]}>Loops</Text>
              <MaterialCommunityIcons
                style={styles.iconloop}
                name={'infinity'}
              />
            </View>
          </View>
        </View>
        <Feed />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: 'black',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  iconloop: {
    flexDirection: 'row',
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 2,
    marginTop: 10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
});

export default Profile;
