import React from 'react';
import { fetchUserLogin } from '../actions/login'
import { connect } from 'react-redux';

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
    return(
      <form className="login" onSubmit={this.handleSubmit}>
        <h1 style={{fontWeight:'600'}}>login</h1>
        <input className="login-input" name="email" type="text" placeholder="email address" onChange={this.handleChange} value={this.state.email}/>
        <input className="login-input" name="password" type="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
        <input className="login-button" type="submit" value="sign in" />
        <input className="login-button register" type="button" value="register" onClick={this.handleClick}/>
      </form>
    )
  }
}

export default connect(null, {fetchUserLogin})(LoginForm);

