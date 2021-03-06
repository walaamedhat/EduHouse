import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LearnScreen from '../screens/LearnScreen';
import LevelsScreen from '../screens/LevelsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LevelStack = createStackNavigator(
  {
    Links: LevelsScreen,
  },
  config
);

LevelStack.navigationOptions = {
  tabBarLabel: 'Levels',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LevelStack.path = '';

const LearnStack = createStackNavigator(
  {
    Settings: LearnScreen,
  },
  config
);

LearnStack.navigationOptions = {
  tabBarLabel: 'Learn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

LearnStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LevelStack,
  LearnStack,
});

tabNavigator.path = '';

export default tabNavigator;
