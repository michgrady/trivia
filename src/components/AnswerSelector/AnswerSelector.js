import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class AnswerSelector extends React.Component {
  render() {
  return (
      <View >
         <Button
          onPress={() => {
          this.props.navigation.navigate('QuizScreen1')
          }}
          title="TRUE"
          color="#841584"
        />
        <Button
          onPress={() => {
          this.props.navigation.navigate('QuizScreen1')
          }}
          title="FALSE"
          color="#841584"
        />
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
