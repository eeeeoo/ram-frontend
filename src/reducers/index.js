import { combineReducers } from 'redux';
import userReducer from './userReducer';
import boardReducer from './boardReducer';
import formReducer from './formReducer';

export default combineReducers({
  userReducer,
  boardReducer,
  formReducer
})