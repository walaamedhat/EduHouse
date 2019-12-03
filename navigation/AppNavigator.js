import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LearnScreen from '../screens/LearnScreen';
import LevelsScreen from '../screens/LevelsScreen';
import SelectScreen from '../screens/SelectScreen';
import CategoryScreen from '../screens/CategoriesScreen';
import TestScreen from '../screens/TestScreen';
import HomeScreen from '../screens/HomeScreen';


const ScreenStack = createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
      Levels: {
        screen: LevelsScreen,
        navigationOptions: {
          headerTitle: 'Levels',
        },
      },
      Select: {
        screen: SelectScreen,
        navigationOptions: {
          headerTitle: '',
        },
      },
      Category: {
        screen: CategoryScreen,
        navigationOptions: {
          headerTitle: 'Category',
        },
      },
      Learn: {
        screen: LearnScreen,
        navigationOptions: {
          headerTitle: 'Learn',
        },
      },
      Test: {
        screen: TestScreen,
        navigationOptions: {
          headerTitle: 'Test',
        },
      },
},
  {initialRouteName: 'Home'}
)

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Auth: {
     screen: ScreenStack,
    },
  })
);
