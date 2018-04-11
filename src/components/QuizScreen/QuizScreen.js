import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import AnswerSelector from '../AnswerSelector/AnswerSelector';
import Card from '../Card/Card';
import Headline from '../Headline/Headline';


export default class QuizScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        <Headline text='headline' />
        <Card text='card text' />
        <Paginator 
            currentPage={this.props.currentPage}
            totalPages={this.props.name} />
        <AnswerSelector>Answer</AnswerSelector>
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