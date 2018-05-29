import {
    SET_QUIZ_QUESTIONS, 
    INITIALIZE_QUESTIONS,
    ANSWER_QUESTION,
    EVALUATE_ANSWERS }
    from './types'


export const setAnsweredQuestion = payload =>
({
        type:  ANSWER_QUESTION,
        payload        
});

export const intializeQuestions = payload =>
({
        type: INITIALIZE_QUESTIONS,
        payload  
});


/*
 Example response from API
 
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
    */

   export function fetchQuizQuestions() {
    return (dispatch, getState) => {

    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('raw result: ' + responseJson);
        console.log('raw result: ' + responseJson.results)
 
          const questionsArray = [];
          for (let questionObject of responseJson.results) {
            console.log(questionObject.category);

            questionsArray.push({
              category: questionObject.category,
              text: questionObject.question,
              correctAnswer: questionObject.correct_answer,
              userAnswer: null
           });
          }  

          console.log(' questions array: ' + questionsArray);
         dispatch(intializeQuestions({payload: questionsArray})); 
         
      })
      .catch(error => {
          console.log( error);
      });
    }
}

export function answerQuestion(answer) { 
    return (dispatch, getState) => {
        dispatch(setAnsweredQuestion({payload: answer})); 
    }
}


export function evaluateAnswer(answer) { 
    return (dispatch, getState) => {
    
         // for this question, set answered_correctly and 
         if (this.state.currentQuestionNumber <= this.state.totalQuestionCount){
    
          console.log('about to update state'); 
           this.setState({
            isLoading: false,
            questions: this.state.questionsArray,
            currentQuestion: this.state.questionsArray[this.state.currentQuestionNumber],
            currentQuestionIndex: this.state.currentQuestionNumber + 1
          });
          console.log('updated state');
           
        } else {
            // all done, go to results
            this.props.navigation.navigate('ResultsScreen')
        }
    
        /*this.setState({
            isLoading: false,
            questions: questionsArray
          });*/

    }
}


