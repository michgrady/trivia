import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import { StackNavigator } from "react-navigation";
import QuizScreen from "./src/components/QuizScreen/QuizScreen";
import WelcomeScreen from "./src/components/WelcomeScreen/WelcomeScreen";

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = new StackNavigator ({
  WelcomeScreen: { screen: WelcomeScreen },
  QuizScreen1: { screen: QuizScreen }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })
