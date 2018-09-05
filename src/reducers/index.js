import { combineReducers } from 'redux';
import userReducer from './userReducer';
import boardReducer from './boardReducer';

export default combineReducers({
  userReducer,
  boardReducer

})