import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import AppContainer from './src/containers/AppContainer';
import store from './src/store';
import { createStore, compose, applyMiddleware } from 'redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('trivia', () => App);