import { combineReducers } from 'redux';
import userReducer from './userReducer';
import boardReducer from './boardReducer';
import formReducer from './formReducer';
import textReducer from './textReducer';

export default combineReducers({
  userReducer,
  boardReducer,
  formReducer,
  textReducer,
})