import {combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import timerReducer from './timer-reducer';

export default combineReducers({
  todoReducer,
  timerReducer
})
