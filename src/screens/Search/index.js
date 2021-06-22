import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <FontAwesome style={styles.searchIcon} name={'search'} size={30} />
          <TextInput style={styles.text} placeholder="Search here.." />
        </View>
        <View style={{backgroundColor: '#FFFFFF'}}>
          <View style={{marginTop: 5}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.profileImagestorys}>
                  <ImageBackground
                    style={styles.profileImagestorys}
                    source={{
                      uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy',
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View>
          <Text style={styles.discovertitle}> Discover </Text>
        </View>
        <View>
          <Text style={styles.discovertitle}> Challenges </Text>
        </View>
        <View>
          <Text style={styles.discovertitle}> Trending </Text>
        </View>
        <View>
          <Text style={styles.discovertitle}> Subscriptions </Text>
        </View>
        <View>
          <Text style={styles.discovertitle}> Favorites </Text>
        </View>
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
    width: 80,
    height: 80,
    marginLeft: 0,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'green',
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
  discovertitle: {
    fontSize: 30,
    marginTop: 100,
    fontWeight: 'bold',
  },
});

export default SearchBar;
