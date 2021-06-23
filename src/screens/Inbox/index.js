import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Button,
  TouchableHighlight,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  Text,
  FlatList,
  TextInput,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import TopBar from './TopBar';
import Home from '../Home';

const FirstRoute = () => (
  <View>
    <Text> Hey </Text>
  </View>
);

const SecondRoute = () => (
  <View>
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
    <Text> private </Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Messages'},
    {key: 'second', title: 'Private'},
    {key: 'second', title: 'Calls'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
