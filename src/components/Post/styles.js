import {StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  containervideo: {
    width: '100%',
    height: Dimensions.get('window').height - 80,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '95%',
    justifyContent: 'flex-end',
  },
  rightcontainer: {
    alignItems: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 6,
  },
  bottomcontainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 8,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  songName: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#4c4c4c',
  },
  profilepicontainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsContainer: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
  },
  container: {
    width: '100%',
    height: '50',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
  profileleft: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default styles;
