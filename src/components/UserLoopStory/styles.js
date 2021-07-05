import {StyleSheet, Dimensions} from 'react-native';
import { actionRow } from "aws-amplify";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
  },
  profileImagestorys: {
    width: 50,
    height: 50,
    marginLeft: 0,
    borderRadius: 10,
    backgroundColor: 'blue',
    borderColor: '#00c3e3',
    borderWidth: 3,

  },
  storyContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
  },
  handle: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  uiContainerprofile: {
    height: '100%',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  //  right container
  rightContainer: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePicture: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#90ee90',
  },

  iconContainer: {
    alignItems: 'center',
    marginRight: 50,
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  profiletop: {
    marginTop: 5,
    flexDirection: 'row',
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
});

export default styles;
