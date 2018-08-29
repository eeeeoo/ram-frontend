import React from 'react';
import { userRegister } from '../actions/register'
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userRegister(this.state.name, this.state.email, this.state.password)
    console.log(this.props.userRegister(this.state.name,this.state.email, this.state.password))
  }

  handleClick = () => {
    this.props.history.push("/")
  }

  render(){
    return(
      <form className="login" onSubmit={this.handleSubmit}>
        <h1 style={{fontWeight:'600'}}>register</h1>
        <input className="login-input" name="name" type="text" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
        <input className="login-input" name="email" type="text" placeholder="email address" onChange={this.handleChange} value={this.state.email}/>
        <input className="login-input" name="password" type="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
        <input className="login-button" type="submit" value="register" />
        <input className="login-button register" type="button" value="login" onClick={this.handleClick}/>
      </form>
    )
  }
}

export default connect(null, {userRegister})(RegisterForm);

