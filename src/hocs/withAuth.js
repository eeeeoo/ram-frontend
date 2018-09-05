import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem('token') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('token') && this.props.loggedIn) {
        return <WrappedComponent />
      } else {
        return <Redirect to="/" />
      }
    }
  }

  return connect(
    mapStateToProps,
    actions
  )(AuthorizedComponent)
}

const mapStateToProps = ({ userReducer: { loggedIn } }) => ({
  loggedIn,
})

export default withAuth