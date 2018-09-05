import React from 'react';
import './RamsContainer.css';
import { NavLink, } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';

class RamsContainer extends React.Component{
  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <div className="reverse-outline">welcome</div>
          <div className="outline">{this.props.name}</div>
        </div>
        <div>
          <NavLink
            to = "/create"
            exact
            className="create-link" 
          >create new board</NavLink>
        </div>
        <div className="rams-list">
          <h1>access my boards</h1>
          {this.props.boards.map(board=> 
            <NavLink 
            className="ram-link"
            to = {`/board${board.id}`}
            exact 
            key={board.id}
            content={board.content}
            >{board.title}</NavLink>
          )}
        </div>
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
  connect(mapStateToProps)(RamsContainer)
);
