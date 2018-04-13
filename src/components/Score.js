
import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class Score extends React.Component {
  render() {
   return (
       <View>
           <Text>You scored</Text>
            <Text>{this.props.numCorrect} / {this.props.numItems}</Text>
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
