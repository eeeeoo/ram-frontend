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
