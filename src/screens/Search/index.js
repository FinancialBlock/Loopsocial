import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground, Image,
} from "react-native";
import EvilIcons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { emitNotificationDecl } from "react-native/ReactCommon/hermes/inspector/tools/msggen/src/HeaderWriter";

const SearchBar = () => {
  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      <View>
        <View style={styles.container}>
          <FontAwesome style={styles.searchIcon} name={'search'} size={30} />
          <TextInput style={styles.text} placeholder="Search here.." />
        </View>
        <View style={{backgroundColor: '#FFFFFF'}}>
          <View style={styles.storieswatchalign}>
          <Text style={styles.storiesalign}>Stories</Text>
          <Text style={styles.watchalign}> Watch all</Text>
          </View>
          <View style={{marginTop: 5}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwNzYwMzU2OTI1MjIwMjAw/gettyimages-144485756.jpg',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://static.wikia.nocookie.net/taylor-swift/images/f/f8/966B835D-05BE-41A0-88E6-2F201B8E2A88.jpeg/revision/latest?cb=20200913182411',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://www.rollingstone.com/wp-content/uploads/2021/05/J.-Cole_Lead-Promo-Image.jpg?resize=1800,1200&w=1200',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://static.highsnobiety.com/thumbor/pD4imSosu5Y0wOYZo8p5zBoc6h0=/1600x960/static.highsnobiety.com/wp-content/uploads/2021/05/04153050/jay-z-feat.jpg',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2020/10/GTY-1278509654.jpg?w=1000&h=600&crop=1',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.storyview}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://i.pinimg.com/280x280_RS/ef/b7/f6/efb7f67bd9dbb9aa28ba41b2931ef559.jpg',
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>



        <View>
          <Text style={styles.discovertitlefirst}> Discover </Text>
        </View>

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

        <View>
          <Text style={styles.discovertitle}> Challenges </Text>
        </View>

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


        <View>
          <Text style={styles.discovertitle}> Trending </Text>
        </View>

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


        <View>
          <Text style={styles.discovertitle}> Subscriptions </Text>
        </View>

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

        <View>
          <Text style={styles.discovertitle}> Favorites </Text>
        </View>

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

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#888888',
    fontSize: 18,
    height: 50,
  },
  text: {
    fontSize: 20,
    marginLeft: 5,
  },
  searchIcon: {
    marginLeft: 10,
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
  profileImagestorys: {
    width: 70,
    height: 70,
    marginLeft: 0,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'blue',
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
  storyview: {
    marginLeft: 4,
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
  discovertitlefirst: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  discovertitle: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: 'bold',
  },
  watchalign: {
    fontSize: 15,
    color: 'blue',
    marginTop: 5,
    textAlign: 'right',
    marginRight: 5,
  },
  storiesalign: {
    color: 'blue',
    fontSize: 15,
    marginTop: 5,
    flexDirection: 'row',
    marginLeft: 5,
  },
  storieswatchalign: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
});

export default SearchBar;
