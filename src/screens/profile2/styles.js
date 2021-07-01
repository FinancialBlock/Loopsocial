import { Image, ScrollView, Text, View } from "react-native";

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
      <Text
        style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
        Started following{' '}
        <Text style={{fontWeight: '400'}}>Jake Challeahe</Text> and{' '}
        <Text style={{fontWeight: '400'}}>Luis Poteer</Text>
      </Text>
    </View>
  </View>

  <View style={styles.recentItem}>
    <View style={styles.activityIndicator} />
    <View style={{width: 250}}>
      <Text
        style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
        Started following{' '}
        <Text style={{fontWeight: '400'}}>Luke Harper</Text>
      </Text>
    </View>
  </View>
</View>
