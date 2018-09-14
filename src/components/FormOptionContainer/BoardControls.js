import React from 'react';
import './FormOptionContainer.css';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';

const BoardControls = () => {
  return(
    <div className="save-board">
      <input className="board-title" name="board-title" type="text" placeholder="title"/>
      <input className="save-button" type="submit" value="save"/>
    </div>
  )
}

const mapStateToProps = ({boardReducer: {boards, content, title}}) => {
  return {
    content,
    title,
    boards
  }
}

export default withAuth(
  connect(mapStateToProps)(BoardControls)
);