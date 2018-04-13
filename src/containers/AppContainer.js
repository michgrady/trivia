import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ActionCreators} from '../actions/index';
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from "react-navigation";

import QuizContainer from "./QuizContainer";
import WelcomeScreen from "../components/WelcomeScreen";
import ResultsScreen from "../components/ResultsScreen";

   
export class AppContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }
    
  render() {
     return (
         <AppNavigator />   
     );
  }
}


const AppNavigator = new StackNavigator ({
    WelcomeScreen: { screen: WelcomeScreen },
    QuizScreen: { screen: QuizContainer  },
    ResultsScreen: { screen: ResultsScreen }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
})


function mapStateToProps(state) {
  return {}
}
      
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
    