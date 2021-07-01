import * as React from 'react';
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
    marginBottom: 10,
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
