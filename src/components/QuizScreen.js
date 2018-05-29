import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import Card from './Card';
import Headline from './Headline';
import Paginator from './Paginator';
import styles from './Styles'

export default class QuizScreen extends React.Component {
 
  constructor(props) {
    super(props);
  }

  onAnswerSelected(answer) {
    this.props.evaluateAnswer(answer);
  }

  render() {

    return (
      <View style={styles.container}>
        <Headline text={this.props.category} /> 
        <Card text={this.props.question}/>
        <Paginator 
          currentPage={this.props.currentQuestionNumber}
          totalPages={this.props.totalQuestions} />
          <View >
          <Button style={styles.button}
            onPress={this.onAnswerSelected('TRUE')}
            title="TRUE"
          />
          <Button style={styles.button}
           onPress={this.onAnswerSelected('FALSE')}
            title="FALSE"
          />
        </View>

      </View>
    );
  }
}
