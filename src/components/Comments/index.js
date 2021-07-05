import React from 'react';
import { Button, Header, Avatar } from 'react-native-elements';
import { View } from "react-native";


// Your App
const Topbar = () => {
  return (
    <View>
      <Header
        leftComponent={{icon: 'menu', color: '#fff', iconStyle: {color: '#fff'}}}
        centerComponent={{text: 'Loops', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
        containerStyle={{
          backgroundColor: 'black',
          justifyContent: 'space-around',
        }}></Header>

    </View>
  )
};

export default Topbar;
