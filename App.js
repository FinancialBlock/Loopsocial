import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {Node} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
