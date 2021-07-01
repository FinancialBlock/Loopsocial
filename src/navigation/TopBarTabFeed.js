import * as React from "react";
import {Text,  View,  Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "../screens/Home";
import Profilea from "../screens/profile2";

const Tab = createMaterialTopTabNavigator();

function TopBarTabFeed() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Profilea} />
    </Tab.Navigator>
  );
}

export default TopBarTabFeed;
