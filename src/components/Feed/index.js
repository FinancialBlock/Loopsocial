import * as React from 'react';
import styles from './styles';
import {
  View,
  useWindowDimensions,
  Button,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Profilecard from "../Profilecard";
import {
  Text,
  FlatList,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const FirstRoute = () => (
  <ScrollView style={styles.container}>
    <View style={{marginTop: 32}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.mediaImageContainer}>
          <Image
            source={require('./assets/media1.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mediaImageContainer}>
          <Image
            source={require('./assets/media2.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mediaImageContainer}>
          <Image
            source={require('./assets/media3.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
       <TouchableOpacity >

      <View style={styles.mediaCount}>
        <Text
          style={[
            styles.text,
            {fontSize: 24, color: '#DFD8C8', fontWeight: '300'},
          ]}>
          70
        </Text>
        <Text
          style={[
            styles.text,
            {fontSize: 12, color: '#DFD8C8', textTransform: 'uppercase'},
          ]}>
          Media
        </Text>
      </View>
    </TouchableOpacity>
    </View>
    <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
    <View style={{alignItems: 'center'}}>
      <View style={styles.recentItem}>
        <View style={styles.activityIndicator} />
        <View style={{width: 250}}>
          <Text style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
            Started following{' '}
            <Text style={{fontWeight: '400'}}>Jake Challeahe</Text> and{' '}
            <Text style={{fontWeight: '400'}}>Luis Poteer</Text>
          </Text>
        </View>
      </View>

      <View style={styles.recentItem}>
        <View style={styles.activityIndicator} />
        <View style={{width: 250}}>
          <Text style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
            Started following{' '}
            <Text style={{fontWeight: '400'}}>Luke Harper</Text>
          </Text>
        </View>
      </View>
    </View>
  </ScrollView>
);
//second page
const SecondRoute = () => (
  <View>
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
    <Profilecard/>
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
    {key: 'first', title: 'Loops'},
    {key: 'second', title: 'Private'},
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
