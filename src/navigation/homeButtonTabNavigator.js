import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profilea from '../screens/profile2';
import Search from '../screens/Search';
import TabViewExample from '../screens/Inbox';
import Camera from '../screens/Camera';
import {Image} from 'react-native';
import circleicon from '../assets/images/circle-cropped.png';
import Topbar from "../components/Top Bar";
import UserLoopStory from "../components/UserLoopStory";
import Storyparent from '../screens/Storyparent';

const Tab = createBottomTabNavigator();

const HomeButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
          justifyContent: 'flex-end',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />

          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name={'search'} size={40} color={color} />
          ),
        }}
      />

        <Tab.Screen
            name={'Camera'}
            component={Camera}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name={'camera'} size={40} color={color} />
                ),
            }}
        />
      <Tab.Screen
        name={'Inbox'}
        component={TabViewExample}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'inbox'} size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profilea}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'person-circle-outline'} size={30} color={color} />
          ),
        }}
      />
{/*      <Tab.Screen
        name={'Searchs'}
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name={'search'} size={40} color={color} />
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
};

export default HomeButtonTabNavigator;
