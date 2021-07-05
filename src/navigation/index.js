import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import HomeButtonTabNavigator from './homeButtonTabNavigator';
import LoopStoryScreen from '../screens/LoopStoryScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeButtonTabNavigator} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Post',
          }}
          name="CreatePost"
          component={CreatePost}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            title: 'Loop Stories',
          }}
          name="Story"
          component={LoopStoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigation;
