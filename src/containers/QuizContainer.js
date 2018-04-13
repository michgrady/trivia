import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import QuizScreen from '../components/QuizScreen';

export class QuizContainer extends React.Component {

  constructor (props) {
    super(props);
    this.props.fetchQuizQuestions();
  }
  
  render() {
     return (
          <QuizScreen 
            category={this.props.currentQuestion.text} 
            question={this.props.currentQuestion.question} 
            currentQuestionNumber={this.props.currentQuestionNumber}
            totalQuestions={this.props.totalQuestionCount}
            onAnswerQuestion={this.onAnswerQuestion}
         /> 
     );
  }

  onAnswerQuestion(answer) {
    console.log('onAnswerQuestion');
    this.props.answerQuestion(answer);

    if (state.questionNumber >= state.totalQuestionCount) {
       // all done, go to results
       this.props.navigation.navigate('ResultsScreen')
    }
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    currentQuestionNumber: state.questionNumber,
    totalQuestionCount: state.totalQuestionCount,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);