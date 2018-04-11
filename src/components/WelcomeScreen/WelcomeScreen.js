import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';


export default class WecomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
       
         <Button
          onPress={() => {
              this.props.navigation.navigate('QuizScreen1')
          }}
          title="BEGIN"
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
