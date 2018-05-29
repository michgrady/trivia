
import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import ScoredItem from './ScoredItem';

//        {dataList.map(r => <ScoredItem text={this.props.text} isCorrect={this.props.isCorrect}/>)}      
   

export default class ScoredList extends React.Component {
  render() {
   return (
     ///  {this.props.items}  question.question   userCorrect
       <View>
          {dataList.map(r => <ScoredItem text={this.props.text} isCorrect={this.props.isCorrect}/>)}  
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
