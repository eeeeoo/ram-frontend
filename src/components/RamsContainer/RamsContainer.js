import React from 'react';
import Ram from './Ram';
import './RamsContainer.css';
import { NavLink, } from 'react-router-dom';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';

class RamsContainer extends React.Component{

  // handleNewBoardClick = () => {

  // }

  // createMarkup = (content) => {
  //   return {__html: content};
  // }

  // mapBoardContent = () => {
  //   return {this.props.boards.map(board=>           
  //   <div dangerouslySetInnerHTML={this.createMarkup(board.content)} key={board.id}/>
  //   )}
  // }
  render(){
    return(
      <div className="ram-container">
        <div className="container">
          <div className="reverse-outline">welcome</div>
          <div className="outline">{this.props.name}</div>
        </div>
        <div>
          <br></br>
          <br></br>
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
        
        {console.log(this.props.boards)}
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
