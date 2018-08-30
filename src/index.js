import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

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
