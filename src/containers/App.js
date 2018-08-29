import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <p className="app-title">ram</p>
        </div>
        <React.Fragment>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </React.Fragment>
      </div>
    );
  }
}

