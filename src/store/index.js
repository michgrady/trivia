import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
    );
    return createStore(reducers, initialState, enhancer);
  }
  
  const INITIAL_STATE = {
    questions: [],
    currentQuestion: {},
    currentNumber: 0,
    totalQuestionCount: 0
};

  const store = configureStore({});

  export default store;