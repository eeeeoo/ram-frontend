import React from 'react';
import { fetchUserLogin } from '../../actions/user';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import './LoginRegisterForms.css'

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchUserLogin(this.state.email, this.state.password)
  }

  handleClick = () => {
    this.props.history.push("/register")
  }

  render(){
    return this.props.loggedIn ? (
      <Redirect to="/rams" />
    ) : (
      <form className="login" onSubmit={this.handleSubmit}>
        <input className="login-input" name="email" type="text" placeholder="email address" onChange={this.handleChange} value={this.state.email}/>
        <input className="login-input" name="password" type="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
        <input className="login-button" type="submit" value="log in" />
        <input className="login-button register" type="button" value="register" onClick={this.handleClick}/>
      </form>
    )
  }
}

const mapStateToProps = ({userReducer: {name, email, loggedIn}}) => {
  return {
    name,
    email,
    loggedIn,
  }
}

export default withRouter(
  connect(
    mapStateToProps, 
    {fetchUserLogin}
  )(LoginForm)
);

