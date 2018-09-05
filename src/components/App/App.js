import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import LoginForm from '../LoginRegisterForms/LoginForm';
import RegisterForm from '../LoginRegisterForms/RegisterForm';
import RamCreator from '../RamCreator';
import About from '../About/About';
import RamsContainer from '../RamsContainer/RamsContainer'
import Ram from '../RamsContainer/Ram';

import './App.css';
import logo from './logo.png';

const App = () =>  {
    return (
      <div className="app">
        <div className="app-header">
          {/* <NavLink 
            to="/rams"
            exact
            className="rams-link"
          >my boards</NavLink> */}
          <img className="app-title" src={logo} alt="logo"/>
        </div>
        <React.Fragment>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/create" component={RamCreator} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rams" component={RamsContainer} />
          <Route exact path="/board:id" render={props => 
            <Ram {...props} />
          } 
        />

        </React.Fragment>
      </div>
    );
  }

  export default withRouter(App);

