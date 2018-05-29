
import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class ScoredItem extends React.Component {
  render() {
   return (
       <View>
            <Text>{this.props.isCorrect}</Text>
            <Text>{this.props.text}</Text>
      </View>
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
