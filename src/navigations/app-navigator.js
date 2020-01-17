import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '_screens/home';
import EdgeCTLScreen from '_screens/edge-ctl';
import EdgeLTCScreen from '../screens/edge-ltc';
import CornerLTCScreen from '../screens/corner-ltc'; 

// const AppNavigatorConfig = {
//   initialRouteName: 'Home',
//   header: null,
//   headerMode: 'none',
// };

// const RouteConfigs = {
//   Home: {
//     screen: HomeScreen,
//   },
//   EdgeCTL: {
//     screen: EdgeCTLScreen,
//   },
//   EdgeLTC: {
//     screen: EdgeLTCScreen,
//   },
// };

// const AppNavigator = createStackNavigator(RouteConfigs, AppNavigatorConfig);
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    EdgeCTL: EdgeCTLScreen,
    EdgeLTC: EdgeLTCScreen,
    CornerLTC: CornerLTCScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#171717',

      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center'
      },
    },
  }
);

export default AppNavigator;