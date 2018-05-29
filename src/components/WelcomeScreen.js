import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import styles from './Styles'


export default class WecomeScreen extends React.Component {
  
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.basicText}>You will be presented with 10 True or False questions.</Text>
        <Text style={styles.basicText}>Can you score 100%?</Text>
       
        <Button style={styles.button}
          onPress={() => {
              this.props.navigation.navigate('QuizScreen')
          }}
          title="BEGIN"
        />
      </View>
    );
  }

}