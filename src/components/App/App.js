import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import LoginForm from '../LoginRegisterForms/LoginForm';
import RegisterForm from '../LoginRegisterForms/RegisterForm';
import RAMContainer from '../RAMContainer';
import './App.css';
import logo from './logo.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <NavLink 
            to="/rams"
            exact
            className="rams-link"
          >my boards</NavLink>
          <img className="app-title" src={logo} alt="logo"/>
        </div>
        <React.Fragment>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/create" component={RAMContainer} />
        </React.Fragment>
      </div>
    );
  }
}

