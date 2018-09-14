import React from 'react';
import './RamsContainer.css';
import { NavLink, } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import * as actions from '../../actions';

class RamsContainer extends React.Component{
  logout = () => {
    localStorage.clear()
    window.location= 'http://localhost:3001'
  }
  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <div className="outline">welcome</div>
          <div className="reverse-outline">{this.props.name}</div>
        </div>
        <div className="create-container">
          <NavLink
            to = "/create"
            exact
            className="create-link" 
          >+ new board</NavLink>
        </div>
        <div className="rams-list">
          {/* <h1>my boards</h1> */}
          {/* possibly use hoc for navlink */}
          {this.props.boards ? this.props.boards.map(board=> 
            <NavLink 
            className="ram-link"
            to = {`/board${board.id}`}
            exact 
            key={board.id}
            content={board.content}
            >-{board.title}</NavLink>
          ): null}
        </div>
        <button className="logout" onClick={this.logout}>logout</button>
      </div>
    )
  }
}

const mapStateToProps = ({userReducer: {name, boards}}) => {
  return {
    name,
    boards
  }
}

export default withAuth(
  connect(mapStateToProps, actions)(RamsContainer)
);
