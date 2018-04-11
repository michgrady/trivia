import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class Card extends React.Component {
  render() {
    return (
     // <View style={styles.container}>
        <Text>this.props.text</Text>
     // </View>
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
