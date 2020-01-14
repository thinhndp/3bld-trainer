import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '_screens/home';
import EdgeCTLScreen from '_screens/edge-ctl';
import EdgeLTCScreen from '_screens/edge-ltc';

const AppNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  EdgeCTL: {
    screen: EdgeCTLScreen,
  },
  EdgeLTC: {
    screen: EdgeLTCScreen,
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, AppNavigatorConfig);

export default AppNavigator;