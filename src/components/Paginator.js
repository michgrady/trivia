import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Styles'

export default class Paginator extends React.Component {
  render() {
   return (
      <Text style={styles.basicText}>{this.props.currentPage} of {this.props.totalPages}</Text>
    );
  }
}