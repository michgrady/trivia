import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import Score from './Score';
import ScoredList from './ScoredList';


export default class ResultsScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        <Score numItems={this.props.questions.length} numCorrect={this.props.numCorrect}  style={styles.heading}/>
        <ScoredList items={this.props.questions}  style={styles.list}/>
       
        <Button  style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('QuizScreen')
          }}
          title="PLAY AGAIN?"
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
    justifyContent: 'space-evenly',
  },
  heading: {
  //  flex: 1,
  //  backgroundColor: '#fff',
  //  alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
   // flex: 1,
   // backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});