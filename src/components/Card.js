import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Styles'

export default class Card extends React.Component {
  render() {
    return (
     // <View style={styles.container}>
        <Text style={styles.basicText}>{this.props.text}</Text>
     // </View>
    );
  }
}