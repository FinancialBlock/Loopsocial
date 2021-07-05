import {StyleSheet, Dimensions} from 'react-native';
import { actionRow } from "aws-amplify";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 130,
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
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
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
  cameraflip: {

  }
});

export default styles;
