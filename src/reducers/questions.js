//import update from 'immutability-helper';

import { 
    INITIALIZE_QUESTIONS,
    ANSWER_QUESTION,
    EVALUATE_ANSWERS,
    SET_CURRENT_QUESTION  } 
    from '../actions/types';


const INITIAL_STATE = {
    questions: [],
    currentQuestion: {},
    currentNumber: 0,
    totalQuestionCount: 0
};

   export const questionsReducer = (state = INITIAL_STATE, action) => {
        switch(action.type) {

            case INITIALIZE_QUESTIONS:
            {
                console.log('INNITIALISE QQQQQQQ');
                return {
                    ...state,
                    questions: action.payload,
                    currentQuestionNumber: 1,
                    currentQuestion: action.payload[0],
                    totalQuestionCount: action.payload.length
                }
            }
            case ANSWER_QUESTION: {
                return {
                    ...state,
                    currentQuestionNumber: state.currentQuestionNumber + 1,
                    currentQuestion: state.questions[state.currentQuestionNumber],
                    update(questions, { 
                       contents: { 
                       [action.id]: {
                            userAnswer: {$set: action.payload}
                        }
                    }
                });
              }
            }
            case EVALUATE_ANSWERS: {
                    return {
                        ...state,
                        questions: action.payload
                    }
                }  
            default:
                return state;
        }
    }
    
