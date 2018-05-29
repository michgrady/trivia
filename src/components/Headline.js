import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Styles'

export default class Headline extends React.Component {
  render() {
    return (
      <Text style={styles.heading}> {this.props.text}</Text>
    );
  }
}
