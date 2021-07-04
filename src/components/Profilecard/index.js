import { Tile } from 'react-native-elements';
import { View } from "react-native";
import React from 'react';

const Profilecard = () => {
  return (
    <View flexDirection={'row'}>
      <Tile
        imageSrc={require('../../assets/images/circle-cropped.png')}
        icon={{name: 'play-circle', type: 'font-awesome'}}
        height={200}
        width={100}
        title={'loop'}
        caption="4"
      />
      <Tile
        imageSrc={require('../../assets/images/circle-cropped.png')}
        icon={{name: 'play-circle', type: 'font-awesome'}}
        height={200}
        width={100}
        title={'loop'}
        caption="4"

      />
      <Tile
        imageSrc={require('../../assets/images/circle-cropped.png')}
        icon={{name: 'play-circle', type: 'font-awesome'}}
        height={200}
        width={100}
        title={'loop'}
        caption="4"
        borderRadius={2}
      />
      <Tile
        imageSrc={require('../../assets/images/circle-cropped.png')}
        icon={{name: 'play-circle', type: 'font-awesome'}}
        height={200}
        width={100}
        title={'loop'}
        caption="4"
        borderRadius={2}
        borderWidth="10"
      />

    </View>
  );
};

export default Profilecard;
