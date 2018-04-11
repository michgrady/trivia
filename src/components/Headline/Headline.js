import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class Headline extends React.Component {
  render() {
    return (
      <Text>this.props.text</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
