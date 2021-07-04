import React, {useRef, useState} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import {RNCamera, FaceDetector} from 'react-native-camera';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

import styles from './styles';
import awaitAsyncGenerator from '@babel/runtime/helpers/esm/awaitAsyncGenerator';
import {useNavigation} from '@react-navigation/native';

const Camera = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();

  const navigation = useNavigation();

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      navigation.navigate('CreatePost', {videoUri: data.uri});
    }
  };

  return (

    <View style={styles.container}>
      <View style={styles.rightcontainer}>
        <TouchableOpacity >
          <MaterialIcons name={'flip-camera-ios'} size={40} color={'white'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.rightcontainer}>
        <TouchableOpacity >
          <Entypo name={'flash'} size={40} color={'white'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.rightcontainer}>
        <TouchableOpacity >
          <Ionicons name={'musical-notes'} size={40} color={'white'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.rightcontainer}>
        <TouchableOpacity >
          <Fontisto name={'smiley'} size={40} color={'white'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.rightcontainer}>
        <TouchableOpacity >
          <MaterialCommunityIcons name={'format-text'} size={40} color={'white'}/>
        </TouchableOpacity>
      </View>
      <RNCamera
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={styles.preview}
        //captureAudio={false}
      />
      <TouchableOpacity
        onPress={onRecord}
        style={isRecording ? styles.buttonStop : styles.buttonRecord}
      />

    </View>

  );
};

export default Camera;
