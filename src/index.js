import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import './style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootReducer = combineReducers({ userReducer })

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("Redux store state: ", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
